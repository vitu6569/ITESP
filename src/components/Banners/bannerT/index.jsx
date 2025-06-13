// Importa o botão padrão reutilizável
import DefaultButton from '../../Buttons/defaultButton';

// Importa os estilos específicos e globais
import './style/index.css';
import '../../../style/index.css';

/**
 * Componente BannerT
 * Exibe um banner com título, descrição e botão de ação.
 * Utilizado para destacar o impacto do projeto São Pedro Beach Soccer.
 */
const BannerT = () => {
    return (
        <div className="bannerT amareloFundo">
            {/* Área reservada para imagem do banner */}
            <div className="bannerT__image"></div>

            {/* Conteúdo textual do banner */}
            <div className="marginBottom-1">
                <div className="marginBottom-2">
                    {/* Título do banner */}
                    <h1 className="bannerT__title branco">
                        NOSSO
                        <span className="charcoal">IMPACTO</span>
                    </h1>
                    {/* Descrição do banner */}
                    <p className="bannerT__description subtitleFont branco">
                        Há 8 anos, o projeto São Pedro Beach Soccer transforma a vida de crianças e jovens do bairro São Pedro, em Vitória/ES.
                    </p>
                </div>
                {/* Botão de ação */}
                <DefaultButton title="Saiba mais" style="Default" />
            </div>
        </div>
    );
};

export default BannerT;