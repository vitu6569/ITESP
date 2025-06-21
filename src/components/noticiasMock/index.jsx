import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import "./style/index.css";

const NoticiasMock = () => {
  const [noticias, setNoticias] = useState([]);
  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const snapshot = await getDocs(collection(db, "noticias"));
        const dados = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("🔥 Dados do Firestore:", dados); // <--- Aqui o teste
        setNoticias(dados);
      } catch (error) {
        console.error("❌ Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);
  return (
    <section className="noticias-section">
      <h2 className="noticias-titulo">Últimas Notícias</h2>
      <div className="noticias-lista">
        {noticias.map((noticias) => (
          <a
            href="https://eshoje.com.br/esportes/2024/09/sao-pedro-conquista-o-mundial-de-clubes-de-beach-soccer-feminino/"
            target="_blank"
            key={noticias}
            className="noticia-card"
          >
            <img
              src={noticias.imagemURL || "https://picsum.photos/600/400"}
              alt={noticias.titulo}
              width={600}
              height={400}
            />
            <div className="noticia-conteudo">
              <h3>{noticias.titulo}</h3>
              <p className="noticia-data">{noticias.data}</p>
              <p>{noticias.Subtitulo}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NoticiasMock;
