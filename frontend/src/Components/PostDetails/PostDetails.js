import React, { Component } from 'react'
import Card from "../Layout/Card/Card"


class PostDetails extends Component {
    state = {
        post: {}
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => { this.setState({ post: data }) })
            .catch(error => console.log(error))
    }
    render() {
        const post = { ...this.state.post }
        return (
            <Card color="lightblue">
                <div className="d-flex flex-column flex-lg-row align-items-center">
                    <img src={post.path} className="img-fluid rounded col-12 col-lg-6" alt="" />
                    <small>{post.title}</small>
                    <div className="d-flex flex-column col-12 col-lg-6 align-items-center">
                        <small className="mr-3 ml-3">Sexo: {post.sex}</small>
                        <small>Edad: {post.age}</small>
                    </div>
                </div>
            </Card >

        )
    }
}

export default PostDetails