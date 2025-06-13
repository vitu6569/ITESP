// Importa o botão padrão e os arquivos de estilo necessários
import DefaultButton from "../Buttons/defaultButton";
import "./style/index.css";
import "../../style/index.css";

// Componente principal da seção de projetos
const SectionProject = () => {
    return (
        <div className="project__container">
            {/* Título da seção */}
            <div className="project__title">
                <h1 className="project__title__text">
                    NOSSOS<span className="amarelo">PROJETOS</span>
                </h1>
                <div className="project__title__line">
                    <p className="description">
                        beach soccer como ferramenta para desenvolver valores, promover cidadania e impulsionar o potencial de cada jovem atendido.
                    </p>
                    {/* Botão para saber mais sobre os projetos */}
                    <DefaultButton title="Saiba mais" style="Yellow" />
                </div>
            </div>

            {/* Container dos cards de projetos */}
            <div className="cards__container">
                {/* Banner principal do projeto */}
                <div className="cards__banner branco">
                    <div className="image__project__banner">
                        {/* Espaço reservado para imagem do banner */}
                    </div>
                    <div>
                        <div className="section__project__content__text">
                            <h1 className="section__project__title h1">
                                São Pedro <span className="amarelo">beach soccer</span>
                            </h1>
                            <p className="section__project__text">
                                A equipe feminina adulta do São Pedro Beach Soccer representa o Espírito Santo em competições nacionais e internacionais, e também contribui com aula...
                            </p>
                        </div>
                        {/* Botão para saber mais sobre o projeto do banner */}
                        <DefaultButton title="Saiba mais" style="Default" />
                    </div>
                </div>

                {/* Linha de cards de projetos adicionais */}
                <div className="cards-row">
                    {/* Gera 3 cards de exemplo */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="custom-card">
                            <img
                                className="custom-card-image"
                                src="src/assets/images/TimeFem.jpg"
                                alt={`Card ${item}`}
                            />
                            <div className="description">
                                <p className="description-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit.
                                </p>
                                {/* Botão para saber mais sobre cada card */}
                                <DefaultButton title="Saiba mais" style="Default" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionProject;
