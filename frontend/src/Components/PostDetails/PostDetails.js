import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { POPULATE_SELECTED_POST } from "../../store/actions"
import { Badge, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SERVER_URL } from '../../Constants/constants'

class PostDetails extends Component {

    componentDidMount() {
        fetch(SERVER_URL + "alert/" + this.props.match.params.id)
            .then(response => response.json())
            .then(data => { this.props.populateSelectedPost(data); console.log(data) })
            .catch(error => console.log(error))
    }
    render() {
        const post = { ...this.props.post }
        const date = new Date(post.date)
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
                        <div style={{ fontWeight: "bold" }}>Animal</div>: {post.animal}
                    </div>
                    <div className="d-flex mt-2">
                        <div style={{ fontWeight: "bold" }}>Sexo</div>: {post.gender}
                    </div>
                    <div className="d-flex mt-2">
                        <div style={{ fontWeight: "bold" }}>Edad</div>: {post.age}
                    </div>
                    <div className="d-flex mt-2" style={{ textAlign: "start" }}>
                        <p style={{ fontWeight: "bold" }}>Direccion</p>: {post.address}
                    </div>
                    <div className="d-flex mt-2">
                        <div style={{ fontWeight: "bold" }}>{post.email}test</div>
                        <div className="ml-auto">{post.phone}</div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="ml-auto" style={{ fontSize: "small" }}>Publicado el dia:{date.getDay()}/{date.getMonth()}/{date.getFullYear()}</div>
                    </div>
                </div>
            </Fragment>
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