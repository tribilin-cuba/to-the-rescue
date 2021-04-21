import React, { Component } from "react"
import { Link } from "react-router-dom"
import Post from "./Post/Post"
// import NewPost from "./NewPost/NewPost"

// import Modal from "../Layout/Modal/Modal"


class Posts extends Component {
    state = {
        posts: [],
        showModal: false,
        selectedPostId: "1"
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => { this.setState({ posts: data }) })
            .catch(error => console.log(error))
    }

    render() {
        const posts = this.state.posts
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

export default Posts;