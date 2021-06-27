import { Alert } from "react-bootstrap";

function Error({ message }) {
    return (
        <Alert variant="danger">
            <p>Ups algo salio mal: {message} </p>
        </Alert>
    )
}
export default Error