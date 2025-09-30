import React, { useState, useEffect } from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import Post from "./Post/Post.tsx"
import { useSelector, useDispatch } from "react-redux"
import { populatePosts } from "../../App/store"
import TopHeader from "../TopHeader/TopHeader"
import "./Posts.css"
import { SERVER_URL } from "../../Constants/constants"
import Spinner from "../Layout/Spinner/Spinner"
import PostsTabs from "../Layout/PostsTabs/PostsTabs"
import { Button, Modal } from "react-bootstrap"
import { FaFilter } from "react-icons/fa"
import FilterForm from "../Layout/FilterForm/FilterForm"
import Footer from "../Footer/Footer"

function Posts() {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [activeKey, setActiveKey] = useState("all");
    const [search, setSearch] = useState("");
    
    const posts = useSelector(state => state.app.posts);
    const userId = useSelector(state => state.app.userId);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.has("alert_type")) {
            setActiveKey(searchParams.get("alert_type"));
            searchParams.delete("alert_type");
            setSearch(searchParams.toString());
        } else {
            setActiveKey("all");
        }

        fetch(SERVER_URL + "alert/all" + location.search)
            .then(response => response.json())
            .then(data => {
                dispatch(populatePosts(data));
                setLoading(false);
            })
            .catch(error => {
                if (error.message === "Failed to fetch")
                    window.flash("Sin conexión a Internet. Inténtelo de nuevo más tarde.", "error")
                else
                    window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")

                setLoading(false);
            })
    }, [location.search, dispatch]);

    const postElements = posts
        .map(post => <Post
            key={post._id}
            id={post._id}
            animal={post.animal}
            alert_type={post.alert_type}
            municipality={post.municipality}
            date={post.date}
            description={post.description}
            from={"home" + location.search}
            picture_path={post.picture_path}
            province={post.province}
        />
        );

    const newPostHandler = (event) => {
        event.preventDefault();
        if (userId)
            setRedirect(true);
        else
            window.flash("Debe iniciar sesión para publicar una alerta", "error");
    };

    let body = postElements.length > 0 ?
        postElements :
        (<div className="no-alerts">
            No hay alertas publicadas recientemente.
         </div>);

    if (redirect)
        return <Navigate to={"/new-post/home" + location.search} />

    if (loading)
        return <Spinner />
    
    return (
        <div>
            <TopHeader title="Alertas" smallTitle="" />
            <div className="d-flex justify-content-start mt-2 mb-2">
                <Button
                    className="posts-filter-button"
                    onClick={() => setShowFilterModal(true)}
                >
                    <FaFilter /> Filtrar
                </Button>
            </div>
            <PostsTabs
                body={body}
                activeKey={activeKey}
                search={search}
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

            <Modal centered show={showFilterModal} onHide={() => setShowFilterModal(false)}>
                <Modal.Body>
                    <FilterForm
                        onHide={() => setShowFilterModal(false)}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Posts;