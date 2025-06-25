import arrowRD from "../../../assets/icons/arrowRD.png";
import "./style/index.css";


const DefaultButton = ({ link, title, style = "default", target = "_self" }) => {
    // Define the button class based on the style prop
    let buttonClass = "hero__button__Default";
    if (style === "Yellow") {
        buttonClass = "hero__button__Yellow";
    } else if (style === "LightGray") {
        buttonClass = "hero__button__LightGray";
    }

    return (
        <button className={buttonClass}>
            <a href={link} className="hero__button__link buttonsFont preto" target={target} rel="noopener noreferrer">
                {title} <img src={arrowRD} alt="arrow" style={{ width: 16, position: 'relative' }} />
            </a>
        </button>
    )
}

export default DefaultButton;