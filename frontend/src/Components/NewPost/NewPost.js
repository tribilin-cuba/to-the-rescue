import React, { Component } from "react"
import "./NewPost.css"
import { Form, Button } from "react-bootstrap"
import { SERVER_URL } from "../../Constants/constants"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import imageCompression from 'browser-image-compression'

class NewPost extends Component {
    state = {
        postForm: {
            author_id: this.props.userId,
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
            description: "",
            imgString: null,

        },
        imgUrl: "/default.png",
        validated: false,
        from: "home",
    }
    componentDidMount() {
        const from = this.props.match.params.from + this.props.location.search
        this.setState({ from: from })
    }
    submitHandler = (event) => {
        event.preventDefault();
        const form = event.target
        if (form.checkValidity() === false) {
            this.setState({ validated: true })
            return
        }

        const submitButton = document.getElementById("submit-post")
        submitButton.disabled = true

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.postForm)
        }
        fetch(SERVER_URL + "alert", request)
            .then(response => {
                window.flash("Alerta publicada con éxito", "success")
                this.props.history.push("/" + this.state.from)
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
                submitButton.disabled = false
            })
    }

    inputChangedHandler = (event, inputId) => {
        const updatedPostForm = { ...this.state.postForm }
        updatedPostForm[inputId] = event.target.value

        this.setState({ postForm: updatedPostForm })
    }
    changeImageHandler = (event) => {
        if (event.target.files[0]) {
            var imageFile = event.target.files[0];
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

            var options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            }
            imageCompression(imageFile, options)
                .then(compressedFile => {
                    console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

                    let reader = new FileReader()

                    reader.readAsDataURL(compressedFile)
                    reader.onload = () => {
                        this.setState({
                            imgUrl: URL.createObjectURL(compressedFile),
                            postForm: { ...this.state.postForm, imgString: reader.result }
                        });
                        console.log(reader.result)
                    }
                })
                .catch(() =>
                    window.flash("Ha ocurrido un error al cargar la imagen", "error")
                );
        }
    }
    render() {
        return (
            <Form onSubmit={this.submitHandler} noValidate validated={this.state.validated}>
                <Form.Group>
                    <div className="d-flex">
                        <Link to={"/" + this.state.from} className="ml-auto" >
                            <img src="/close.png" alt="close" style={{ width: "15px", heigth: "15px" }} />
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center customContainer">
                        <img className="NewPostImage" src={this.state.imgUrl} alt='' />
                        <label>
                            <img src="/camera.png" style={{ width: "50px" }} alt="add" />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={this.changeImageHandler}
                                className="fileInput"
                                style={{ visibility: "hidden", width: "0px" }} />
                        </label>
                    </div>
                    <div className="d-flex flex-column">
                        <Form.Group>
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "alert_type") }} >
                                <option value="" disabled selected>Condición del animal</option>
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
                                <option value="Pinar del río">Pinar del río</option>
                                <option value="Artemisa">Artemisa</option>
                                <option value="La Habana">La Habana</option>
                                <option value="Mayabeque">Mayabeque</option>
                                <option value="Matanzas">Matanzas</option>
                                <option value="Cienfuegos">Cienfuegos</option>
                                <option value="Villa Clara">Villa Clara</option>
                                <option value="Sancti Spíritus">Sancti Spíritus</option>
                                <option value="Ciego de Ávila">Ciego de Ávila</option>
                                <option value="Camagüey">Camagüey</option>
                                <option value="Las Tunas">Las Tunas</option>
                                <option value="Granma">Granma</option>
                                <option value="Holguín">Holguín</option>
                                <option value="Santiago de Cuba">Santiago de Cuba</option>
                                <option value="Guantánamo">Guantánamo</option>
                                <option value="Isla de la Juventud">Isla de la Juventud</option>
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
                                <Form.Control placeholder="Teléfono (opcional)" onChange={(event) => { this.inputChangedHandler(event, "phone") }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Correo electrónico (opcional)" onChange={(event) => { this.inputChangedHandler(event, "email") }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Descripción" as="textarea" onChange={(event) => { this.inputChangedHandler(event, "description") }} />
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Button id="submit-post" type="submit" variant="warning">Publicar</Button>
                        </Form.Group>
                    </div>
                </Form.Group>
            </Form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.userId
    }
}
export default connect(mapStateToProps)(NewPost)