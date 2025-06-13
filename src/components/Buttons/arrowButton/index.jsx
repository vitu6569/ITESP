import ArrowLW from '../../../assets/icons/ArrowLW.png'
import ArrowRW from '../../../assets/icons/ArrowRW.png' // Corrija o caminho se necessário

const ArrowButton = ({ direction = 'right', onClick, children, ...props }) => {
    const arrow = direction === 'left' ? ArrowLW : ArrowRW;

    return (
        <button onClick={onClick} {...props} style={{ width: 42, height: 42, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: direction === 'left' ? 'flex-start' : 'flex-end' }}>
            {direction === 'left' && <img src={arrow} alt="arrow" style={{ width: 18}}/>}
            {children}
            {direction === 'right' && <img src={arrow} alt="arrow" style={{ width: 18}}/>}
        </button>
    );
}

export default ArrowButton;
