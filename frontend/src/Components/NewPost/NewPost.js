import React, { Component } from "react"
import "./NewPost.css"
import { Form, Button } from "react-bootstrap"
// import Card from "../Layout/Card/Card"

class NewPost extends Component {
    state = {
        postForm: {
            author_id: "piti",
            animal: "",
            gender: "",
            age: 0,
            picture_path: "",
            province: "",
            municipality: "",
            address: "",
            alert_type: "Lost",
            email: "",
            phone: "",
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.postForm)
        }
        // console.log(this.state.postForm)
        fetch("http://localhost:8080/alert", request)
            .then(response => {
                console.log(response)
                this.props.history.push('/')
            })
            .catch(error => console.log(error))

    }
    inputChangedHandler = (event, inputId) => {
        const updatedPostForm = { ...this.state.postForm }
        updatedPostForm[inputId] = event.target.value

        this.setState({ postForm: updatedPostForm })
    }
    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Form.Group>
                    <div className="d-flex justify-content-center">
                        <img className="NewPostImage" src="./default.png" alt='' />
                    </div>
                    <div className="d-flex flex-column">
                        <Form.Group>
                            <Form.Control as="select" placeholder="Condicion del animal" onChange={(event) => { this.inputChangedHandler(event, "alert_type") }}>
                                <option value="Lost">Perdido</option>
                                <option value="Abandoned">Abandonado</option>
                                <option value="Seek Adoption">Adopcion</option>
                                <option value="Critical">Critico</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" placeholder="Animal" onChange={(event) => { this.inputChangedHandler(event, "animal") }}>
                                <option>Perro</option>
                                <option>Gato</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" placeholder="Sexo (opcional)" onChange={(event) => { this.inputChangedHandler(event, "gender") }}>
                                <option value="Female">Hembra</option>
                                <option value="Male"> Macho</option>
                                {/* <option>Desconocido</option> */}
                            </Form.Control >
                        </Form.Group>

                        <Form.Group>
                            <Form.Control placeholder="Edad" onChange={(event) => { this.inputChangedHandler(event, "age") }} />
                        </Form.Group>
                        {/* ############################### */}
                        <Form.Group>
                            <Form.Control as="select" placeholder="Provincia" onChange={(event) => { this.inputChangedHandler(event, "province") }}>
                                <option>La Habana</option>
                                <option>Areas Verdes :)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" placeholder="Municipio" onChange={(event) => { this.inputChangedHandler(event, "municipality") }}>
                                <option>Habana Vieja</option>
                                <option>Playa</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" placeholder="Direccion" onChange={(event) => { this.inputChangedHandler(event, "address") }} />
                        </Form.Group>
                        <div>

                            <Form.Group>
                                <Form.Control placeholder="Telefono (opcional)" onChange={(event) => { this.inputChangedHandler(event, "phone") }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Correo electronico (opcional)" onChange={(event) => { this.inputChangedHandler(event, "email") }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Descripcion" as="textarea" onChange={(event) => { this.inputChangedHandler(event, "description") }} />
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Button type="submit">Publicar</Button>
                        </Form.Group>
                    </div>
                </Form.Group>
            </Form>
        )
    }
}

export default NewPost