import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { POPULATE_SELECTED_POST } from "../../store/actions"
import { Badge, Card, Modal, Button, Spinner } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { SERVER_URL, TOY_DETA_KEY, DETA_URL, TOY_DETA_ID } from '../../Constants/constants'
import CustomSpinner from '../Layout/Spinner/Spinner'
import "./PostDetails.css"
import { MdEdit, MdDelete, MdMessage } from "react-icons/md"
import { ImWhatsapp } from "react-icons/im"
import { IoCall } from 'react-icons/io5'
import { DETA_PROJECT_ID } from '../../Constants/constants'
import { DETA_API_KEY } from '../../Constants/constants'
import PictureModal from '../Layout/PictureModal/PictureModal'

class PostDetails extends Component {
    state = {
        loading: true,
        redirect: false,
        show: false,
        editRedirect: false,
        from: "home",
        imgUrl: null,
        showImg: false
    }

    componentDidMount() {
        const from = this.props.match.params.from + this.props.location.search
        fetch(SERVER_URL + "alert/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                let picture_path = data.picture_path
                this.props.populateSelectedPost(data)
                this.setState({ loading: false, from: from })

                const projectId = DETA_PROJECT_ID || TOY_DETA_ID
                const detaDriveName = 'photos'
                const urlSuffix = `files/download?name=${picture_path}`

                const imgUrl = picture_path === "" ?
                    "/default.png" :
                    `${DETA_URL}${projectId}/${detaDriveName}/${urlSuffix}`

                if (imgUrl !== "/default.png")
                    fetch(imgUrl, { headers: { "X-Api-Key": DETA_API_KEY || TOY_DETA_KEY, "Cache-Control": "public,  max-age=604800, immutable" } })
                        .then(response => response.text())
                        .then(text => {
                            const pict = "data:image/png;base64," + text
                            this.setState({ imgUrl: pict })
                        })
                else
                    this.setState({ imgUrl: imgUrl })
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
            })

    }


    render() {
        const deleteHandler = () => {
            const postId = this.props.post._id
            fetch(SERVER_URL + "alert/" + postId, { method: "DELETE" })
                .then(response => response.json())
                .then(data => {
                    this.setState({ redirect: true })
                    window.flash("Alerta borrada con éxito", "success")
                })
                .catch(error => {
                    window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
                })
        }

        const showPictureHandler = () => {
            if (this.state.imgUrl !== "/default.png")
                this.setState({ showImg: true })
        }
        const post = { ...this.props.post }
        const date = new Date(`${post.date}`)
        const linkStatus = {
            "Perdido": "perdido ",
            "Adopción": "en adopción ",
            "Crítico": "en estado crítico ",
            "Abandonado": "abandonado "
        }
        const linkAnimal = {
            "Perro": "Perrito ",
            "Gato": "Gatico "
        }
        const linkText = linkAnimal[post.animal] + linkStatus[post.alert_type] + "en el municipio " + post.municipality + ". Toca el link para más detalles \n"



        if (this.state.redirect)
            return <Redirect to={"/" + this.state.from} />
        if (this.state.editRedirect)
            return <Redirect to={`/edit-post/${this.props.post._id}/${this.state.from}`} />

        if (this.state.loading)
            return <CustomSpinner />

        return (
            <Fragment>
                <div className="d-flex">
                    <Link
                        to={"/" + this.state.from}
                        className="ml-auto"
                    >
                        <img src="/close.png" alt="close" style={{ width: "15px", heigth: "15px" }} />
                    </Link>
                </div>
                <div className="d-flex flex-column align-content-center">
                    <h3 className={post.alert_type}>{post.alert_type}</h3>
                    <div>
                        {
                            this.state.imgUrl !== null ?
                                <img src={this.state.imgUrl}
                                    alt="post"
                                    onClick={showPictureHandler}
                                    style={{
                                        width: "200px",
                                        borderRadius: "10px 10px 10px 10px"
                                    }}
                                /> :
                                <Spinner variant="dark" animation="border" />
                        }
                    </div>
                    <div className="TopHeaderText mt-4" style={{ fontSize: "x-large" }}>
                        <div>{post.municipality ? `${post.municipality},` : null} {post.province}</div>
                    </div>
                    <Badge pill variant="warning"> </Badge>
                </div>
                <div className="d-flex flex-column">
                    {post.description &&
                        <div className="d-flex" style={{ textAlign: "start" }}>
                            <Card.Text className="mt-2">
                                {post.description}
                            </Card.Text>
                        </div>
                    }
                    <div className="d-flex mt-2">
                        <b> Animal</b>: {post.animal}
                    </div>
                    {post.gender &&
                        <div className="d-flex mt-2">
                            <b> Sexo</b>: {post.gender}
                        </div>
                    }
                    {post.age &&
                        <div className="d-flex mt-2">
                            <b> Edad</b>: {post.age}
                        </div>
                    }
                    {post.address &&
                        <div className="mt-2" style={{ textAlign: "start", overflowX: "scroll" }}>
                            <b>Dirección</b>: {post.address}
                        </div>
                    }
                    <div className="d-flex mt-2">
                        <b> {post.email}</b>
                    </div >
                    {post.phone &&
                        <div className="d-flex mt-2">
                            <b>Teléfono</b>:{post.phone}
                            <div className="ml-auto">
                                <a href={`tel:${post.phone}`}><IoCall size="20" color="gray" /></a>
                                <a href={`sms:${post.phone}`}><MdMessage size="20" color="gray" className="ml-2" /></a>
                            </div>
                        </div>

                    }
                    <div className="mr-auto mt-2">
                        <small>Publicado el día: {date.toLocaleDateString("es-ES")}</small>
                    </div>
                    <div className="mr-auto mt-2">
                        <a
                            style=
                            {{
                                color: "#2ec871",
                                fontStyle: "italic",
                            }}
                            href={`whatsapp://send?text=${linkText}${window.location.href}`}
                            data-action="share/whatsapp/share"
                        >
                            <ImWhatsapp
                                size="20"
                                style={{ verticalAlign: "top" }}
                            />
                            <b
                                className="ml-2"
                                style={{ verticalAlign: "bottom" }}
                            >
                                Compartir por Whatsapp
                            </b>
                        </a>
                    </div>


                </div>
                {this.props.userId !== null && post.author_id === this.props.userId ?
                    <div className="d-flex flex-column posts-details-actions-div">
                        <div className="posts-details-edit-button" onClick={() => this.setState({ editRedirect: true })}>
                            <MdEdit color="white" style={{ width: "30px", height: "30px" }} />
                        </div>

                        <div className="posts-details-delete-button" onClick={() => this.setState({ show: true })} >
                            <MdDelete color="white" style={{ width: "30px", height: "30px" }} />
                        </div>
                    </div> :
                    null
                }
                <Modal show={this.state.show} onHide={() => this.setState({ show: false })} centered>
                    <Modal.Body>
                        <div className="d-flex flex-column">
                            <div className="justify-content-center">
                                <b style={{ color: "#e27e22" }}>¿Está seguro que desea borrar esta alerta?</b>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <Button style={{ backgroundColor: "#e34c3c", borderColor: "white" }} onClick={deleteHandler}>Borrar</Button>
                                <Button style={{ backgroundColor: "#edc00f", borderColor: "white" }} className="ml-2" onClick={() => this.setState({ show: false })}>Cancelar</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <PictureModal
                    show={this.state.showImg}
                    handleClose={() => this.setState({ showImg: false })}
                    imgSrc={this.state.imgUrl}
                />
            </Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.selectedPost,
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        populateSelectedPost: (data) => dispatch({ type: POPULATE_SELECTED_POST, newPost: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)