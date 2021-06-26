import React, { Component } from "react"
import "./NewPost.css"
import { Form, Button } from "react-bootstrap"
import { SERVER_URL } from "../../Constants/constants"
import { Link } from "react-router-dom"
// import Card from "../Layout/Card/Card"

class NewPost extends Component {
    state = {
        postForm: {
            author_id: "piti",
            animal: "",
            gender: "Desconocido",
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
        imgString: undefined,
        validated: false
    }
    submitHandler = (event) => {
        event.preventDefault();
        const form = event.target
        if (form.checkValidity() === false) {
            this.setState({ validated: true })
            return
        }

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.postForm)
        }
        fetch(SERVER_URL + "alert", request)
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
            <Form onSubmit={this.submitHandler} noValidate validated={this.state.validated}>
                <Form.Group>
                    <div className="d-flex">
                        <Link to="/" className="ml-auto" ><img src="/close.png" alt="close" style={{ width: "15px", heigth: "15px" }} /></Link>
                    </div>
                    <div className="d-flex justify-content-center customContainer">
                        <img className="NewPostImage" src={this.state.imgUrl} alt='' />
                        <label>
                            <img src="/camera.png" style={{ width: "50px" }} alt="add" />
                            <input type="file" onChange={this.changeImageHandler} className="fileInput" style={{ visibility: "hidden", width: "0px" }} />
                        </label>
                    </div>
                    <div className="d-flex flex-column">
                        <Form.Group>
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "alert_type") }} >
                                <option value="" disabled selected>Condicion del animal</option>
                                <option value="Perdido">Perdido</option>
                                <option value="Abandonado">Abandonado</option>
                                <option value="Adopción">Adopción</option>
                                <option value="Crítico">Crítico</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Seleccione un elemento de la lista
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "animal") }}>
                                <option value="" disabled selected>Animal</option>
                                <option>Perro</option>
                                <option>Gato</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Seleccione un elemento de la lista
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "gender") }}>
                                <option value="" disabled selected>Sexo</option>
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
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "province") }}>
                                <option value="" disabled selected>Provincia</option>
                                <option value="La Habana">La Habana</option>
                                <option value="Matanzas">Matanzas</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Seleccione un elemento de la lista
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control required placeholder="Municipio" onChange={(event) => { this.inputChangedHandler(event, "municipality") }} />
                            <Form.Control.Feedback type="invalid">
                                Ingrese municipio
                            </Form.Control.Feedback>
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