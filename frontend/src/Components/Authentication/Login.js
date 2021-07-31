import { Card, Form, Button } from "react-bootstrap"
import { useState } from "react"
import { SERVER_URL } from "../../Constants/constants"
import { Redirect } from "react-router"
import { useDispatch } from "react-redux"
import { SET_USER_ID } from "../../store/actions"

function Login() {
    const [firstName, setName] = useState("")
    const [email, setEmail] = useState("")
    const [validated, setValidated] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return
        }
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                firstName: firstName
            })
        }
        fetch(SERVER_URL + "user-login", request)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: SET_USER_ID,
                    userId: response._id,
                    userName: response.firstName,
                    userEmail: response.email
                })
                setRedirect(true)
                window.flash("Ha iniciado sesion correctamente", "success")
            })
            .catch(error => window.flash("Nombre de usuario o email incorrectos", "error"))
    }
    if (redirect)
        return <Redirect to="/" />

    return (
        <Card>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={submitHandler}>
                    <Form.Group>
                        <Form.Control as="input" placeholder="Nombre de usuario" onChange={(event) => setName(event.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control required as="input" type="email" placeholder="Correo Electronico" onChange={(event) => setEmail(event.target.value)} />
                        <Form.Control.Feedback type="invalid">Ingrese Correo Electronico</Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button type="submit" variant="warning" className="mr-1">Iniciar Sesion</Button>
                        <Button type="button" variant="secondary" href="/">Cancelar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Login