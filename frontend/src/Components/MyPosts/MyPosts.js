import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { populatePosts } from "../../App/store"
import TopHeader from "../TopHeader/TopHeader"
import { SERVER_URL } from "../../Constants/constants"
import Spinner from "../Layout/Spinner/Spinner"
import Post from "../Posts/Post/Post"
import Footer from "../Footer/Footer"

function MyPosts() {
    const [loading, setLoading] = useState(true);
    const posts = useSelector(state => state.app.posts);
    const userId = useSelector(state => state.app.userId);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(SERVER_URL + "alert-by-user/" + userId)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(populatePosts(data));
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
            })
    }, [userId, dispatch]);

    const postElements = (posts || [])
        .map(post => <Post
            key={post._id}
            id={post._id}
            animal={post.animal}
            alert_type={post.alert_type}
            municipality={post.municipality}
            date={post.date}
            description={post.description}
            from="my-posts"
            picture_path={post.picture_path}
            province={post.province}
        />
        );

    if (loading)
        return <Spinner />
    
    return (
        <div>
            <TopHeader title="Mis Alertas" smallTitle="Últimas alertas publicadas" goHome={true} />
            <Link className="ml-auto mr-5" type="button" to="/new-post/my-posts">
                <img className="PostsAddButton" src="./add_button.png" alt=""></img>
            </Link>
            {
                postElements.length > 0 ?
                    postElements :
                    <div style={{ fontStyle: "italic" }}>No ha publicado alertas.</div>
            }
            <Footer />
        </div>
    );
}

export default MyPosts;