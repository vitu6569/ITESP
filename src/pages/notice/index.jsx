import "./style/index.css"
import NoticiasMock from "../../components/noticiasMock/index";

const Notice = () => {
    return (
        <div className="containerNotice">
            <div className="content">
                <h1 className="titleContent charcoal">Notícias</h1>
                <NoticiasMock />
            </div>
        </div>
    );
};

export default Notice;
