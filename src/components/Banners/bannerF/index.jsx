// Importa o botão padrão utilizado no banner
import DefaultButton from "../../Buttons/defaultButton"

// Importa os arquivos de estilo CSS específicos e globais
import "./style/index.css"
import "../../../style/index.css"

// Componente funcional BannerF
const BannerF = () => {
    return (
        <div className="bannerF">
            {/* Seção da imagem do banner */}
            <div className="ImgBannerF">
                {/* Imagem pode ser adicionada via CSS de background ou inserir um <img> aqui */}
            </div>

            {/* Seção de texto e botão */}
            <div>
                <div className="marginBottom-1">
                    {/* Título principal do banner */}
                    <h1 className="h1 marginBottom-2">
                        <span className="branco">Instituto Talentos</span><br />
                        <span className="cinza">Esportivos São Pedro</span>
                    </h1>
                    {/* Subtítulo/descritivo */}
                    <p className="branco subtitleFont">
                        Há 8 anos, o projeto São Pedro Beach Soccer <br />
                        transforma a vida de crianças e jovens do bairro São <br />
                        Pedro, em Vitória/ES.
                    </p>
                </div>
                {/* Botão de ação */}
                <DefaultButton
                    title="Sobre o instituto"
                    link="/about" // Defina o link de destino aqui
                    color="DefaultButton"
                />
            </div>
        </div>
    )
}

export default BannerF