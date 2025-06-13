// Importa o botão padrão reutilizável
import DefaultButton from '../../Buttons/defaultButton';

// Importa os estilos específicos e globais
import './style/index.css';
import "../../../style/index.css";

// Componente funcional para o BannerS
const BannerS = () => {
    return (
        <div className="bannerS cinzaClaroFundo">
            {/* Conteúdo textual do banner */}
            <div className="bannerS__content">
                <h1 className="bannerS__title">
                    Muito<br />Além das Areias
                </h1>
                <p className="bannerS__description subtitleFont">
                    Mais do que esporte: um espaço de aprendizado,
                    <br />
                    cidadania e oportunidades.
                </p>
                {/* Botão de ação */}
                <DefaultButton title="Como Atuamos" style='Yellow' />
            </div>
            {/* Imagem ilustrativa do banner */}
            <div>
                <img
                    src="src/assets/images/ImgBS.png"
                    alt="Banner Image"
                    className="bannerS__image"
                />
            </div>
        </div>
    );
}

// Exporta o componente para uso em outros arquivos
export default BannerS;