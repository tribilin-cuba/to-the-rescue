import "./Spinner.css"
function Spinner() {
    return (
        <div className="d-flex flex-column align-content-center" style={{ height: "100%" }}>
            <div className="loader">Cargando...</div>
            <div style={{ fontWeight: "bolder", color: "gray" }}>
                Cargando...
            </div>
        </div>
    )
}

export default Spinner