import React, { Component } from 'react'
import Card from "../Layout/Card/Card"
import { connect } from "react-redux"
import { POPULATE_SELECTED_POST } from "../../store/actions"

class PostDetails extends Component {

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => this.props.populateSelectedPost(data))
            .catch(error => console.log(error))
    }
    render() {
        const post = { ...this.props.post }
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