import { Modal } from "react-bootstrap";

function PictureModal({ show, imgSrc, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton style={{ borderBottom: "none" }} />
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    <img src={imgSrc} alt="details" className="img-fluid " />
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default PictureModal