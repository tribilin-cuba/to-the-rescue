import React, { Component } from "react"
import { Link } from "react-router-dom"
import Post from "./Post/Post"
import { connect } from "react-redux"
import { POPULATE_POSTS } from "../../store/actions"
import TopHeader from "../TopHeader/TopHeader"
import "./Posts.css"
import { SERVER_URL } from "../../Constants/constants"

class Posts extends Component {

    componentDidMount() {
        fetch(SERVER_URL + "alert/all")
            .then(response => response.json())
            .then(data => { this.props.populatePosts(data); console.log(data) })
            .catch(error => console.log(error))
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
            />
            )
        return (
            <div>
                <TopHeader />
                <Link className="ml-auto mr-5" type="button" to="/new-post"><img className="PostsAddButton" src="./add_button.png" alt=""></img></Link>

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