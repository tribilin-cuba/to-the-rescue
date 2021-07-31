import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Post from "./Post/Post"
import { connect } from "react-redux"
import { POPULATE_POSTS } from "../../store/actions"
import TopHeader from "../TopHeader/TopHeader"
import "./Posts.css"
import { SERVER_URL } from "../../Constants/constants"
import Spinner from "../Layout/Spinner/Spinner"
import Error from "../Layout/Error/Error"
// import { Toast } from "react-bootstrap"

class Posts extends Component {
    state = {
        loading: true,
        error: false,
        errorLog: "",
        redirect: false,
        // showToast: false
    }
    componentDidMount() {
        fetch(SERVER_URL + "alert/all")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.populatePosts(data);
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
        const posts = this.props.posts
            .map(post => <Post
                key={post._id}
                id={post._id}
                animal={post.animal}
                alert_type={post.alert_type}
                municipality={post.municipality}
                date={post.date}
                description={post.description}
                fromHome={true}
                picture_path={post.picture_path}
            />
            )

        const newPostHandler = (event) => {
            event.preventDefault()
            if (this.props.userId)
                this.setState({ redirect: true })
            else
                window.flash("Debe iniciar sesion para publicar una alerta", "error")
        }
        if (this.state.redirect)
            return <Redirect to="/new-post" />

        if (this.state.error)
            return <Error message={this.state.errorLog} />

        if (this.state.loading)
            return <Spinner />
        return (
            <div>
                <TopHeader title="Alertas" smallTitle="Ultimas alertas recibidas" />
                {/* {toast} */}
                <Link className="ml-auto mr-5" type="button" to="/new-post" onClick={(e) => newPostHandler(e)}>
                    <img className="PostsAddButton" src="./add_button.png" alt=""></img>
                </Link>
                {posts}
            </div>
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