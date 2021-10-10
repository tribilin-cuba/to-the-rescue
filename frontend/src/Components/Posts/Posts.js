import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Post from "./Post/Post"
import { connect } from "react-redux"
import { POPULATE_POSTS } from "../../store/actions"
import TopHeader from "../TopHeader/TopHeader"
import "./Posts.css"
import { SERVER_URL } from "../../Constants/constants"
import Spinner from "../Layout/Spinner/Spinner"
import PostsTabs from "../Layout/PostsTabs/PostsTabs"
import { Button, Modal } from "react-bootstrap"
import { FaFilter } from "react-icons/fa"
import FilterForm from "../Layout/FilterForm/FilterForm"
import Footer from "../Footer/Footer"

class Posts extends Component {
    state = {
        loading: true,
        redirect: false,
        showFilterModal: false,
        activeKey: "all",
        search: "",
    }

    componentDidMount() {
        const search = new URLSearchParams(this.props.location.search)
        if (search.has("alert_type")) {
            this.setState({ activeKey: search.get("alert_type") })
            search.delete("alert_type")
            this.setState({ search: search.toString() })
        }
        else
            this.setState({ activeKey: "all" })

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
        if (prevProps.location.search !== this.props.location.search) {
            const search = new URLSearchParams(this.props.location.search)
            if (!search.has("alert_type"))
                this.setState({ activeKey: "all" })
            else
                search.delete("alert_type")
            this.setState({ search: search.toString() })

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
                from={"home" + this.props.location.search}
                picture_path={post.picture_path}
                province={post.province}
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
            (<div className="no-alerts">
                No hay alertas publicadas recientemente.
             </div>)
        if (this.state.redirect)
            return <Redirect to={"/new-post/home" + this.props.location.search} />

        if (this.state.loading)
            return <Spinner />
        return (
            <div>
                <TopHeader title="Alertas" smallTitle="Últimas alertas recibidas" />
                <div className="d-flex justify-content-end">
                    <Button
                        className="posts-filter-button"
                        onClick={() => { this.setState({ showFilterModal: true }) }}
                    >
                        <FaFilter /> Filtrar
                    </Button>
                </div>
                <PostsTabs
                    body={body}
                    activeKey={this.state.activeKey}
                    search={this.state.search}
                />
                <Link
                    className="ml-auto mr-5"
                    type="button"
                    to="/new-post/home"
                    onClick={(e) => newPostHandler(e)}
                >
                    <img className="PostsAddButton" src="/add_button.png" alt="" />
                </Link>
                <Footer />

                <Modal centered show={this.state.showFilterModal} onHide={() => { this.setState({ showFilterModal: false }) }}>
                    <Modal.Body>
                        <FilterForm
                            onHide={() => { this.setState({ showFilterModal: false }) }}
                        />
                    </Modal.Body>
                </Modal>

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