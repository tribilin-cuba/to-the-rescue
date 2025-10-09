import React, { useState, useEffect } from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import Post, { PostProps } from "./Post/Post.js"
import { populatePosts } from "../../App/store.js"
import TopHeader from "../TopHeader/TopHeader.js"
import "./Posts.css"
import Spinner from "../Layout/Spinner/Spinner.js"
import PostsTabs from "../Layout/PostsTabs/PostsTabs.js"
import { Button, Modal } from "react-bootstrap"
import { FaFilter } from "react-icons/fa"
import FilterForm from "../Layout/FilterForm/FilterForm.js"
import Footer from "../Footer/Footer.js"
import usePost from "../../Hooks/Post/UsePost.js"
import { useAppDispatch, useAppSelector } from "../../Hooks/App/App.js"

function Posts() {
    const [redirect, setRedirect] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [activeKey, setActiveKey] = useState<string | null>("all");
    const [search, setSearch] = useState("");
    
    const userId = useAppSelector(state => state.app.userId);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const {data: posts, isLoading, error} = usePost();

    useEffect(() => {
        if (!error)
            return;
        if (error.message === "Failed to fetch")
            window.flash("Sin conexión a Internet. Inténtelo de nuevo más tarde.", "error")
        else
            window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
    }, [error])
    
    useEffect(() => {
        if(posts)
            dispatch(populatePosts(posts));
    }, [posts, dispatch])

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.has("alert_type")) {
            setActiveKey(searchParams.get("alert_type"));
            searchParams.delete("alert_type");
            setSearch(searchParams.toString());
        } else {
            setActiveKey("all");
        }
      
    }, [location.search]);

    const postElements = posts
        .map((post : PostProps) => <Post
            key={post._id}
            _id={post._id}
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

    if (isLoading)
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