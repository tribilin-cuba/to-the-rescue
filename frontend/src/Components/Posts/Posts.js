import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Post from "./Post/Post"
import { connect } from "react-redux"
import { POPULATE_POSTS } from "../../store/actions"
import TopHeader from "../TopHeader/TopHeader"
import "./Posts.css"
import { SERVER_URL } from "../../Constants/constants"
import Spinner from "../Layout/Spinner/Spinner"
import { Tabs, Tab } from "react-bootstrap"
import { IoPaw } from "react-icons/io5"
import { FaHandHoldingHeart, FaHouseDamage } from "react-icons/fa"
import { SiOpenstreetmap } from "react-icons/si"
import { BsExclamationTriangleFill } from "react-icons/bs"
import PostsTabs from "../Layout/PostsTabs/PostsTabs"
// import { MdSettings } from "react-icons/md"

class Posts extends Component {
    state = {
        loading: true,
        redirect: false,
        filter: ""
    }

    componentDidMount() {
        fetch(SERVER_URL + "alert/all" + this.props.location.search)
            .then(response => response.json())
            .then(data => {
                this.props.populatePosts(data);
                this.setState({ loading: false })
            })
            .catch(error => {
                if (error.message === "Failed to fetch")
                    window.flash("Sin conexión a Internet. Inténtelo de nuevo más tarde.", "error")
                else
                    window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")

                this.setState({ loading: false })
            })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search)
            fetch(SERVER_URL + "alert/all" + this.props.location.search)
                .then(response => response.json())
                .then(data => {
                    this.props.populatePosts(data);
                })
                .catch(error => {
                    if (error.message === "Failed to fetch")
                        window.flash("Sin conexión a Internet. Inténtelo de nuevo más tarde.", "error")
                    else
                        window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")

                })
    }

    render() {
        const posts = this.props.posts
            .map(post => <Post
                key={post._id}
                id={post._id}
                animal={post.animal}
                alert_type={post.alert_type}
                municipality={post.municipality}
                date={post.date}
                description={post.description}
                from="home"
                picture_path={post.picture_path}
            />
            )

        const newPostHandler = (event) => {
            event.preventDefault()
            if (this.props.userId)
                this.setState({ redirect: true })
            else
                window.flash("Debe iniciar sesión para publicar una alerta", "error")
        }
        let body = posts !== [] ?
            posts :
            <div style={{ fontStyle: "italic", color: "#464646" }}>
                No hay alertas publicadas recientemente.
        </div>
        if (this.state.redirect)
            return <Redirect to="/new-post/home" />

        if (this.state.loading)
            return <Spinner />
        return (
            <div>
                <TopHeader title="Alertas" smallTitle="Últimas alertas recibidas" />
                <Link
                    className="ml-auto mr-5"
                    type="button"
                    to="/new-post/home"
                    onClick={(e) => newPostHandler(e)}
                >
                    <img className="PostsAddButton" src="./add_button.png" alt=""></img>
                </Link>
                <PostsTabs body={body} />

            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts,
        userId: state.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        populatePosts: (data) => dispatch({ type: POPULATE_POSTS, newPosts: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);