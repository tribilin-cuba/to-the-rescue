import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import Post from "./Post/Post"
// import NewPost from "./NewPost/NewPost"

// import Modal from "../Layout/Modal/Modal"


class Posts extends Component {
    state = {
        posts: [
            {
                id: "1",
                sex: "Hembra",
                age: "4 meses",
                address: "Concha y Via Blanca",
                path: "./img1.jpeg"
            },
            {
                id: "2",
                sex: "Macho",
                age: "2 meses",
                address: "Concha y Luyano",
                path: "./img2.jpeg"
            }
        ],
        showModal: false,
        selectedPostId: "1"
    }
    addPostHandler = () => {

    }
    deletePostHandler = postId => {
        //Should be a delete request 
        let auxPosts = [...this.state.posts];
        const index = auxPosts.findIndex(p => p.id === postId);
        auxPosts.splice(index, 1)
        this.setState({ posts: auxPosts })

    }

    detailsHandler = postId => {
        this.setState({ showModal: true, selectedPostId: postId })

    }
    closeModalHandler = () => {
        this.setState({ showModal: false })
    }

    render() {
        const posts = this.state.posts
            .map(post => <Post
                key={post.id}
                id={post.id}
                sex={post.sex}
                age={post.age}
                address={post.address}
                path={post.path}
                deleteHandler={this.deletePostHandler}
                selectHandler={this.detailsHandler}
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