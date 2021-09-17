import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { POPULATE_POSTS } from "../../store/actions"
import TopHeader from "../TopHeader/TopHeader"
import { SERVER_URL } from "../../Constants/constants"
import Spinner from "../Layout/Spinner/Spinner"
import Post from "../Posts/Post/Post"

class MyPosts extends Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        fetch(SERVER_URL + "alert-by-user/" + this.props.userId)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.props.populatePosts(data);
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ loading: false })
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
            })
    }

    render() {
        const posts = (this.props.posts || [])
            .map(post => <Post
                key={post._id}
                id={post._id}
                animal={post.animal}
                alert_type={post.alert_type}
                municipality={post.municipality}
                date={post.date}
                description={post.description}
                from="my-posts"
                picture_path={post.picture_path}
                province={post.province}
            />
            )

        if (this.state.loading)
            return <Spinner />
        return (
            <div>
                <TopHeader title="Mis Alertas" smallTitle="Últimas alertas publicadas" goHome={true} />
                <Link className="ml-auto mr-5" type="button" to="/new-post/my-posts"><img className="PostsAddButton" src="./add_button.png" alt=""></img></Link>
                {
                    posts.length > 0 ?
                        posts :
                        <div style={{ fontStyle: "italic" }}>No ha publicado alertas.</div>
                }
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
export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);