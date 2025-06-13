// Importação dos estilos CSS
import "./style/index.css";
import "../../style/index.css";

// Importação do componente Input reutilizável
import Input from "../input/index";

/**
 * Componente Footer
 * Responsável por exibir o rodapé do site, incluindo:
 * - Parceiros
 * - Contato
 * - Informações do Instituto
 * - Newsletter
 */
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                {/* Seção de Parceiros */}
                <div className="footer__content__left">
                    <h1 className="title subtitleFont">Parceiros</h1>
                    <div className="Parterns">
                        {/* Logo principal */}
                        <img src="src/assets/logo/ITESPBW.png" alt="ITESP" />
                        <div>
                            {/* Grid de logos de parceiros */}
                            <div className="Parterns__grid">
                                <img src="src/assets/logo/logoA.jpg" alt="Parceiro A" className="image" />
                                <img src="src/assets/logo/logoB.jpg" alt="Parceiro B" className="image" />
                                <div className="imagePersonalized"></div>
                                <img src="src/assets/logo/logoD.jpg" alt="Parceiro D" className="image" />
                            </div>
                        </div>
                        {/* Logo adicional */}
                        <img src="src/assets/logo/INTERPLUS_logo_sem_fundo5.png" alt="Logo Interplus" className="interlupos" />
                    </div>
                </div>

                {/* Seção de Contato */}
                <div className="footer__content__center">
                    <h1 className="title subtitleFont">Contato</h1>
                    <div className="Contact">
                        {/* Email e telefone */}
                        <div className="emailAndNumber">
                            <a href="mailto:contato@itesp.org.br" className="emailLink branco labelFonte">
                                contato@itesp.org.br
                            </a>
                            <a href="tel:+5583999999999" className="numberLink branco labelFonte">
                                +55 83 99999-9999
                            </a>
                        </div>
                        {/* Redes sociais */}
                        <div className="socialMedia">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/icons/instagram.png" alt="Instagram" className="socialMediaIcon" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/icons/twitter.png" alt="Twitter" className="socialMediaIcon" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/icons/facebook.png" alt="Facebook" className="socialMediaIcon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Seção do Instituto */}
                <div className="footer__content__right">
                    <h1 className="title subtitleFont">Instituto</h1>
                    <div className="Instituto">
                        <a href="About" target="_self" className="sobreFooter branco labelFonte">Sobre o instituto</a>
                        <a href="team" target="_self" className="sobreFooter branco labelFonte">Nossa equipe</a>
                        <a href="project" target="_self" className="sobreFooter branco labelFonte">Projetos</a>
                        <a href="works" target="_self" className="sobreFooter branco labelFonte">Atuação</a>
                    </div>
                </div>
            </div>

            {/* Seção de Newsletter */}
            <div className="Newsletter">
                <h1 className="branco h3 newsTitle">Newsletter</h1>
                <form className="newsletterForm">
                    {/* Campo de email */}
                    <Input type="email" placeholder="Email@email.com" />
                    <div className="newsletterCheckbox__container">
                        {/* Checkbox de consentimento */}
                        <label className="custom-checkbox branco labelFonte">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Desejo receber novidades e notícias
                        </label>
                        {/* Botão de inscrição */}
                        <button type="submit" className="newsletterButton buttonsFonte">
                            Inscrever-se
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Footer;