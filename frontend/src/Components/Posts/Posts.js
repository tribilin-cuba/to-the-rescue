import React, { Component } from "react"
import { Link } from "react-router-dom"
import Post from "./Post/Post"
import { connect } from "react-redux"
import { POPULATE_POSTS } from "../../store/actions"

class Posts extends Component {

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => this.props.populatePosts(data))
            .catch(error => console.log(error))
    }

    render() {
        const posts = this.props.posts
            .map(post => <Post
                key={post.id}
                id={post.id}
                title={post.title}
            />
            )
        return (
            <div>
                <div className='d-flex'>
                    <Link className="ml-auto mr-5" type="button" to="/new-post">Nuevo Anuncio</Link>
                </div>
                {posts}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        populatePosts: (data) => dispatch({ type: POPULATE_POSTS, newPosts: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);