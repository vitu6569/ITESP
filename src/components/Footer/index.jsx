import React, { useState } from "react";
import "./style/index.css";
import "../../style/index.css";

import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (!consent) {
      setError("Você precisa aceitar receber novidades.");
      return;
    }

    try {
      const newsletterRef = collection(db, "newsletter");
      const q = query(newsletterRef, where("email", "==", email));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setError("Este e-mail já está cadastrado.");
        return;
      }

      await addDoc(newsletterRef, {
        email,
        createdAt: new Date(),
      });

      setSuccess("Inscrição realizada com sucesso!");
      setEmail("");
      setConsent(false);
    } catch (err) {
      console.error(err);
      setError("Erro ao salvar o e-mail.");
    }
  };

  return (
    <div className="footer branco">
      <div className="footer__content">
        {/* Parceiros */}
        <div className="footer__content__left">
          <h1 className="title subtitleFont">Parceiros</h1>
          <div className="Parterns">
            <img src="src/assets/logo/ITESPBW.png" alt="ITESP" />
            <div>
              <div className="Parterns__grid">
                <img src="src/assets/logo/logoA.jpg" alt="Parceiro A" className="image" />
                <img src="src/assets/logo/logoB.jpg" alt="Parceiro B" className="image" />
                <div className="imagePersonalized"></div>
                <img src="src/assets/logo/logoD.jpg" alt="Parceiro D" className="image" />
              </div>
            </div>
            <img src="src/assets/logo/INTERPLUS_logo_sem_fundo5.png" alt="Logo Interplus" className="interlupos" />
          </div>
        </div>

        {/* Contato */}
        <div className="footer__content__center">
          <h1 className="title subtitleFont">Contato</h1>
          <div className="Contact">
            <div className="emailAndNumber">
              <a href="mailto:contato@itesp.org.br" className="emailLink branco labelFonte">
                instituto.itesp@gmail.com
              </a>
              <a href="tel:+5583999999999" className="numberLink branco labelFonte">
                +55 27 99962-5618
              </a>
            </div>
            <div className="socialMedia">
              <a href="https://www.instagram.com/instituto.itesp" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/icons/instagram.png" alt="Instagram" className="socialMediaIcon" />
              </a>
            </div>
          </div>
        </div>

        {/* Instituto */}
        <div className="footer__content__right">
          <h1 className="title subtitleFont">Instituto</h1>
          <div className="Instituto">
            <a href="About" target="_self" className="sobreFooter branco labelFonte">Sobre o instituto</a>
            <a href="impact" target="_self" className="sobreFooter branco labelFonte">Nosso impacto</a>
            <a href="act" target="_self" className="sobreFooter branco labelFonte">Atuação</a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="Newsletter">
        <h1 className="branco h3 newsTitle">Newsletter</h1>
        <form onSubmit={handleSubmit} className="newsletterForm">
          <div className="input-container">
            <input
              type="email"
              placeholder="Email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="newsletterCheckbox__container">
            <label className="custom-checkbox branco labelFonte">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span className="checkmark"></span>
              Desejo receber novidades e notícias
            </label>
            <button type="submit" className="newsletterButton buttonsFonte">
              Inscrever-se
            </button>
          </div>
        </form>

        {/* Mensagens de feedback */}
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Footer;
