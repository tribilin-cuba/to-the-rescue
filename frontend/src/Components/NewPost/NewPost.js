import React, { Component } from "react"
import "./NewPost.css"
import { Form, Button } from "react-bootstrap"
// import Card from "../Layout/Card/Card"

class NewPost extends Component {
    state = {
        postForm: {
            author_id: "piti",
            animal: "",
            gender: "Undefined",
            age: "",
            picture_path: "",
            province: "",
            municipality: "",
            address: "",
            alert_type: "Perdido",
            email: "",
            phone: "",
            description: ""
        },
        imgUrl: "/default.png",
        imgString: undefined
    }
    submitHandler = (event) => {
        event.preventDefault();
        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.postForm)
        }
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
    changeImageHandler = (event) => {
        if (event.target.files[0]) {
            let reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = () => {
                this.setState({
                    imgUrl: URL.createObjectURL(event.target.files[0]),
                    imgString: reader.result
                });
                console.log(reader.result)
            }
        }
    }
    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Form.Group>
                    <div className="d-flex justify-content-center customContainer">
                        <img className="NewPostImage img-fluid" src={this.state.imgUrl} alt='' />
                        <label>
                            <img src="/camera.png" style={{ width: "50px" }} />
                            <input type="file" onChange={this.changeImageHandler} className="fileInput" style={{ visibility: "hidden", width: "0px" }} />
                        </label>
                    </div>
                    <div className="d-flex flex-column">
                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "alert_type") }}>
                                <option disabled selected>Condicion del animal</option>
                                <option>Perdido</option>
                                <option>Abandonado</option>
                                <option>Adopción</option>
                                <option>Crítico</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "animal") }}>
                                <option disabled selected>Animal</option>
                                <option>Perro</option>
                                <option>Gato</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "gender") }}>
                                <option value="default" disabled selected>Sexo</option>
                                <option>Hembra</option>
                                <option> Macho</option>
                                <option>Desconocido</option>
                            </Form.Control >
                        </Form.Group>

                        <Form.Group>
                            <Form.Control placeholder="Edad" onChange={(event) => { this.inputChangedHandler(event, "age") }} />
                        </Form.Group>
                        {/* ############################### */}
                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "province") }}>
                                <option value="default" disabled selected>Provincia</option>
                                <option>La Habana</option>
                                <option>Areas Verdes :)</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "municipality") }}>
                                <option value="default" disabled selected>Municipio</option>
                                <option>Habana Vieja</option>
                                <option>Playa</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" placeholder="Dirección" onChange={(event) => { this.inputChangedHandler(event, "address") }} />
                        </Form.Group>
                        <div>

                            <Form.Group>
                                <Form.Control placeholder="Telefono (opcional)" onChange={(event) => { this.inputChangedHandler(event, "phone") }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Correo electrónico (opcional)" onChange={(event) => { this.inputChangedHandler(event, "email") }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Descripción" as="textarea" onChange={(event) => { this.inputChangedHandler(event, "description") }} />
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Button type="submit" variant="warning">Publicar</Button>
                        </Form.Group>
                    </div>
                </Form.Group>
            </Form>
        )
    }
}

export default NewPost