import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { SERVER_URL } from "../../Constants/constants"
import { POPULATE_SELECTED_POST } from "../../store/actions"

class EditPost extends Component {
    state = {
        postForm: {
            author_id: this.props.post.author_id,
            animal: this.props.post.animal,
            gender: this.props.post.gender,
            age: this.props.post.age,
            picture_path: this.props.post.picture_path,
            province: this.props.post.province,
            municipality: this.props.post.municipality,
            address: this.props.post.address,
            alert_type: this.props.post.alert_type,
            email: this.props.post.email,
            phone: this.props.post.phone,
            description: this.props.post.description,
            imgString: undefined,

        },
        imgUrl: "/default.png",
        validated: false,
        from: "home",
    }
    componentDidMount() {
        const from = this.props.match.params.from
        this.setState({ from: from })
    }
    submitHandler = (event) => {
        event.preventDefault();
        const form = event.target
        if (form.checkValidity() === false) {
            this.setState({ validated: true })
            return
        }

        const request = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.postForm)
        }
        fetch(SERVER_URL + "alert/" + this.props.post._id, request)
            .then(response => {
                console.log(response)
                this.props.history.push(`/post-details/${this.props.post._id}/${this.state.from}`)
                this.props.populatePosts(this.state.postForm)
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
            })

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
                    postForm: {
                        ...this.state.postForm,
                        imgString: reader.result
                    }
                });
            }
        }
    }
    render() {
        return (
            <Form onSubmit={this.submitHandler} noValidate validated={this.state.validated} className="mt-3">
                <Form.Group>
                    {/* <div className="d-flex">
                        <Link to="/my-posts" className="ml-auto" >
                            <img src="/close.png" alt="close" style={{ width: "15px", heigth: "15px" }} />
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center customContainer">
                        <img
                            className="NewPostImage"
                            src={this.state.imgUrl}
                            alt=''
                        />
                        <label>
                            <img src="/camera.png" style={{ width: "50px" }} alt="add" />
                            <input type="file" onChange={this.changeImageHandler} className="fileInput" style={{ visibility: "hidden", width: "0px" }} />
                        </label>
                    </div> */}
                    <div className="d-flex flex-column">
                        <Form.Group>
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "alert_type") }} value={this.state.postForm.alert_type}>
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
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "animal") }} value={this.state.postForm.animal}>
                                <option value="" disabled selected>Animal</option>
                                <option>Perro</option>
                                <option>Gato</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Seleccione un elemento de la lista
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="select" onChange={(event) => { this.inputChangedHandler(event, "gender") }} value={this.state.postForm.gender}>
                                <option value="" disabled selected>Sexo</option>
                                <option>Hembra</option>
                                <option> Macho</option>
                                <option>Desconocido</option>
                            </Form.Control >
                        </Form.Group>

                        <Form.Group>
                            <Form.Control placeholder="Edad" onChange={(event) => { this.inputChangedHandler(event, "age") }} value={this.state.postForm.age} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control required as="select" onChange={(event) => { this.inputChangedHandler(event, "province") }} value={this.state.postForm.province}>
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
                            <Form.Control required placeholder="Municipio" onChange={(event) => { this.inputChangedHandler(event, "municipality") }} value={this.state.postForm.municipality} />
                            <Form.Control.Feedback type="invalid">
                                Ingrese municipio
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" placeholder="Dirección" onChange={(event) => { this.inputChangedHandler(event, "address") }} value={this.state.postForm.address} />
                        </Form.Group>
                        <div>

                            <Form.Group>
                                <Form.Control placeholder="Teléfono (opcional)" onChange={(event) => { this.inputChangedHandler(event, "phone") }} value={this.state.postForm.phone} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Correo electrónico (opcional)" onChange={(event) => { this.inputChangedHandler(event, "email") }} value={this.state.postForm.email} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control placeholder="Descripción" as="textarea" onChange={(event) => { this.inputChangedHandler(event, "description") }} value={this.state.postForm.description} />
                            </Form.Group>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to={`/post-details/${this.props.post._id}/${this.state.from}`} className="mr-2" >
                                <Button variant="secondary">Cancelar</Button>
                            </Link>
                            <Form.Group>
                                <Button type="submit" variant="warning">Guardar</Button>
                            </Form.Group>
                        </div>
                    </div>
                </Form.Group>
            </Form>
        )
    }
}
const mapStateToProps = state => {
    return {
        post: state.selectedPost
    }
}
const mapDispatchToProps = dispatch => {
    return {
        populatePosts: (data) => dispatch({ type: POPULATE_SELECTED_POST, newPost: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)