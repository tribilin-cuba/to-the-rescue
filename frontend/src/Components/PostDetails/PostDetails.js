import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { POPULATE_SELECTED_POST } from "../../store/actions"
import { Badge, Card } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { SERVER_URL } from '../../Constants/constants'
import Spinner from '../Layout/Spinner/Spinner'
import Error from '../Layout/Error/Error'
import "./PostDetails.css"
import { MdEdit, MdDelete } from "react-icons/md"
class PostDetails extends Component {
    state = {
        loading: true,
        error: false,
        errorLog: "",
        redirect: false
    }

    componentDidMount() {
        fetch(SERVER_URL + "alert/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.populateSelectedPost(data)
                this.setState({ loading: false })
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
            return <Redirect to="/" />

        if (this.state.loading)
            return <Spinner />

        return (
            <Fragment>
                <div className="d-flex">
                    <Link to="/" className="ml-auto" ><img src="/close.png" alt="close" style={{ width: "15px", heigth: "15px" }} /></Link>
                </div>
                <div className="d-flex flex-column align-content-center">
                    <h3 className={post.alert_type}>{post.alert_type}</h3>
                    <div>
                        <img src="/default.png" alt="post" style={{ width: "200px" }} />
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
                </div>
                <div className="d-flex flex-column posts-details-actions-div">
                    <div className="posts-details-edit-button">
                        <MdEdit color="white" style={{ width: "40px", height: "40px" }} />
                    </div>

                    <div className="posts-details-delete-button">
                        <MdDelete color="white" style={{ width: "40px", height: "40px" }} onClick={deleteHandler} />
                    </div>
                </div>
            </Fragment >
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
        populateSelectedPost: (data) => dispatch({ type: POPULATE_SELECTED_POST, newPost: data })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)