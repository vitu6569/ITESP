import "./style/index.css";

const Input = ({ placeholder, type }) => {
    return (
        <div className="input-container">
            <input type={type} className="input-field" placeholder={placeholder} />
        </div>
    )
}

export default Input;