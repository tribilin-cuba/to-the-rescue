import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { POPULATE_SELECTED_POST } from "../../store/actions"
import { Badge, Card, Modal, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { SERVER_URL } from '../../Constants/constants'
import Spinner from '../Layout/Spinner/Spinner'
import Error from '../Layout/Error/Error'
import "./PostDetails.css"
import { MdEdit, MdDelete } from "react-icons/md"
import { FiShare2 } from "react-icons/fi"
class PostDetails extends Component {
    state = {
        loading: true,
        error: false,
        errorLog: "",
        redirect: false,
        show: false,
        editRedirect: false,
        fromHome: "true"
    }

    componentDidMount() {
        const fromHome = this.props.match.params.fromHome
        fetch(SERVER_URL + "alert/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.populateSelectedPost(data)
                this.setState({ loading: false, fromHome: fromHome })
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errorLog: error.message
                })
            })
    }


    render() {
        const deleteHandler = () => {
            const postId = this.props.post._id
            fetch(SERVER_URL + "alert/" + postId, { method: "DELETE" })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState({ redirect: true })
                    window.flash("Alerta borrada con exito", "success")
                })
                .catch(error => {
                    this.setState({
                        error: true,
                        errorLog: error.message
                    })
                })
        }

        const post = { ...this.props.post }
        const date = new Date(post.date)


        if (this.state.error)
            return <Error message={this.state.errorLog} />

        if (this.state.redirect)
            return <Redirect to="/my-posts" />
        if (this.state.editRedirect)
            return <Redirect to={`/edit-post/${this.props.post._id}`} />

        if (this.state.loading)
            return <Spinner />

        return (
            <Fragment>
                <head>
                    <title>your keyword rich title of the website and/or webpage</title>
                    <meta name="description" content="description of your website/webpage, make sure you use keywords!"></meta>
                    <meta property="og:title" content="short title of your website/webpage" />
                    <meta property="og:url" content="https://tribilin-staging.netlify.app/" />
                    <meta property="og:description" content="description of your website/webpage"></meta>
                    <meta property="og:image" content={post.picture_path === "" ? "/default.png" : SERVER_URL + post.picture_path}></meta>
                    <meta property="og:type" content="article" />
                </head>
                <div className="d-flex">
                    <Link to={this.state.fromHome === "true" ? "/" : "/my-posts"} className="ml-auto" ><img src="/close.png" alt="close" style={{ width: "15px", heigth: "15px" }} /></Link>
                </div>
                <div className="d-flex flex-column align-content-center">
                    <h3 className={post.alert_type}>{post.alert_type}</h3>
                    <div>
                        <img src={post.picture_path === "" ? "/default.png" : SERVER_URL + post.picture_path}
                            alt="post"
                            style={{ width: "200px" }}
                        />
                    </div>
                    <div className="TopHeaderText mt-4" style={{ fontSize: "x-large" }}>
                        <div>{post.municipality}, {post.province}</div>
                    </div>
                    <Badge pill variant="warning"> </Badge>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex" style={{ textAlign: "start" }}>
                        <Card.Text className="mt-2">
                            {post.description}
                        </Card.Text>
                    </div>
                    <div className="d-flex mt-2">
                        <b> Animal</b>: {post.animal}
                    </div>
                    <div className="d-flex mt-2">
                        <b> Sexo</b>: {post.gender}
                    </div>
                    <div className="d-flex mt-2">
                        <b> Edad</b>: {post.age}
                    </div>
                    <div className="mt-2" style={{ textAlign: "start", overflowX: "scroll" }}>
                        <b>Direccion</b>: {post.address}
                    </div>
                    <div className="d-flex mt-2">
                        <b> {post.email}</b>
                    </div >
                    <div className="d-flex mt-2">
                        <b>Telefono</b>: {post.phone}
                    </div>
                    <div className="mr-auto mt-2">
                        <small>Publicado el dia:{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</small>
                    </div>
                    <div className="mr-auto mt-2">
                        <a href={`whatsapp://send?text=${window.location.href}`} data-action="share/whatsapp/share">
                            <FiShare2 /> Compartir por Whatsapp
                    </a>
                    </div>


                </div>
                {this.state.userId !== null && this.state.fromHome === "false" ?
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
                            <div>
                                <b style={{ color: "#e27e22" }}>Esta seguro que desea borrar esta alerta?</b>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <Button style={{ backgroundColor: "#e34c3c", borderColor: "white" }} onClick={deleteHandler}>Borrar</Button>
                                <Button style={{ backgroundColor: "#edc00f", borderColor: "white" }} className="ml-2" onClick={() => this.setState({ show: false })}>Cancelar</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
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