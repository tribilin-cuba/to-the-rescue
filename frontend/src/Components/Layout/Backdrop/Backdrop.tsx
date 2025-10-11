import "./Backdrop.css"

interface BackdropProps {
    show: boolean;
    clicked: () => void;
}

const Backdrop = ({ show, clicked }: BackdropProps) => (
    show ? <div className="Backdrop" onClick={clicked}></div> : null
)

export default Backdrop