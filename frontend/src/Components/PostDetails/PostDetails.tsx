import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch } from "react-redux"
import { populateSelectedPost } from "../../App/store"
import { Badge, Card, Modal, Button, Spinner } from 'react-bootstrap'
import { Link, Navigate, useParams, useLocation } from 'react-router-dom'
import { SERVER_URL} from '../../Constants/constants'
import CustomSpinner from '../Layout/Spinner/Spinner'
import "./PostDetails.css"
import { MdEdit, MdDelete, MdMessage } from "react-icons/md"
import { ImWhatsapp } from "react-icons/im"
import { IoCall } from 'react-icons/io5'
import PictureModal from '../Layout/PictureModal/PictureModal'
import { useAppSelector } from '../../Hooks/App/App'
import { PostType } from '../../types/Post'

// Type guard to check if post is a valid PostType
function isPostType(post: PostType | {}): post is PostType {
    return '_id' in post;
}

function PostDetails() {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);
    const [show, setShow] = useState(false);
    const [editRedirect, setEditRedirect] = useState(false);
    const [from, setFrom] = useState("home");
    const [imgUrl, setImgUrl] = useState("/default.png");
    const [showImg, setShowImg] = useState(false);
    
    const post = useAppSelector(state => state.app.selectedPost);
    const userId = useAppSelector(state => state.app.userId);
    const dispatch = useDispatch();
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        const fromParam = params.from + location.search;
        setFrom(fromParam);
        
        fetch(SERVER_URL + "alert/" + params.id)
            .then(response => response.json())
            .then(data => {
                // let picture_path = data.picture_path;
                dispatch(populateSelectedPost(data));
                setLoading(false);

                // const projectId = DETA_PROJECT_ID || TOY_DETA_ID;
                // const detaDriveName = 'photos';
                // const urlSuffix = `files/download?name=${picture_path}`;

                // const imgUrlPath = "/default.png";

                // if (imgUrlPath !== "/default.png")
                //     fetch(imgUrlPath, { headers: { "X-Api-Key": DETA_API_KEY || TOY_DETA_KEY, "Cache-Control": "public,  max-age=604800, immutable" } })
                //         .then(response => response.text())
                //         .then(text => {
                //             const pict = "data:image/png;base64," + text;
                //             setImgUrl(pict);
                //         })
                // else
                    // setImgUrl(imgUrlPath);
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error")
            })
    }, [params.id, params.from, location.search, dispatch]);

    const deleteHandler = () => {
        if (!isPostType(post)) return;
        const postId = post._id;
        fetch(SERVER_URL + "alert/" + postId, { method: "DELETE" })
            .then(response => response.json())
            .then(data => {
                setRedirect(true);
                window.flash("Alerta borrada con éxito", "success");
            })
            .catch(error => {
                window.flash("Ha ocurrido un error. Inténtelo de nuevo más tarde.", "error");
            })
    };

    const showPictureHandler = () => {
        if (imgUrl !== "/default.png")
            setShowImg(true);
    };

    // Type guard check - if post is not loaded yet, show spinner
    if (!isPostType(post)) {
        return <CustomSpinner />;
    }

    const date = new Date(`${post.date}`);
    const linkStatus: Record<string, string> = {
        "Perdido": "perdido ",
        "Adopción": "en adopción ",
        "Crítico": "en estado crítico ",
        "Abandonado": "abandonado "
    };
    const linkAnimal: Record<string, string> = {
        "Perro": "Perrito ",
        "Gato": "Gatico "
    };
    const linkText = linkAnimal[post.animal!] + linkStatus[post.alert_type] + "en el municipio " + post.municipality + ". Toca el link para más detalles \n";

    if (redirect)
        return <Navigate to={"/" + from} />

    if (loading)
        return <CustomSpinner />

    return (
        <Fragment>
            <div className="d-flex">
                <Link
                    to={"/" + from}
                    className="ml-auto"
                >
                    <img src="/close.png" alt="close" style={{ width: "15px", height: "15px" }} />
                </Link>
            </div>
            <div className="d-flex flex-column align-content-center">
                <h3 className={post.alert_type}>{post.alert_type}</h3>
                <div>
                    {
                        imgUrl !== null ?
                            <img src={imgUrl}
                                alt="post"
                                onClick={showPictureHandler}
                                style={{
                                    width: "200px",
                                    borderRadius: "10px 10px 10px 10px"
                                }}
                            /> :
                            <Spinner variant="dark" animation="border" />
                    }
                </div>
                <div className="TopHeaderText mt-4" style={{ fontSize: "x-large" }}>
                    <div>{post.municipality ? `${post.municipality},` : null} {post.province}</div>
                </div>
                <Badge pill> </Badge>
            </div>
            <div className="d-flex flex-column">
                {post.description &&
                    <div className="d-flex" style={{ textAlign: "start" }}>
                        <Card.Text className="mt-2">
                            {post.description}
                        </Card.Text>
                    </div>
                }
                <div className="d-flex mt-2">
                    <b> Animal</b>: {post.animal}
                </div>
                {post.gender &&
                    <div className="d-flex mt-2">
                        <b> Sexo</b>: {post.gender}
                    </div>
                }
                {post.age &&
                    <div className="d-flex mt-2">
                        <b> Edad</b>: {post.age}
                    </div>
                }
                {post.address &&
                    <div className="mt-2" style={{ textAlign: "start", overflowX: "scroll" }}>
                        <b>Dirección</b>: {post.address}
                    </div>
                }
                <div className="d-flex mt-2">
                    <b> {post.email}</b>
                </div >
                {post.phone &&
                    <div className="d-flex mt-2">
                        <b>Teléfono</b>:{post.phone}
                        <div className="ml-auto">
                            <a href={`tel:${post.phone}`}><IoCall size="20" color="gray" /></a>
                            <a href={`sms:${post.phone}`}><MdMessage size="20" color="gray" className="ml-2" /></a>
                        </div>
                    </div>

                }
                <div className="mr-auto mt-2">
                    <small>Publicado el día: {date.toLocaleDateString("es-ES")}</small>
                </div>
                <div className="mr-auto mt-2">
                    <a
                        style=
                        {{
                            color: "#2ec871",
                            fontStyle: "italic",
                        }}
                        href={`whatsapp://send?text=${linkText}${window.location.href}`}
                        data-action="share/whatsapp/share"
                    >
                        <ImWhatsapp
                            size="20"
                            style={{ verticalAlign: "top" }}
                        />
                        <b
                            className="ml-2"
                            style={{ verticalAlign: "bottom" }}
                        >
                            Compartir por Whatsapp
                        </b>
                    </a>
                </div>


            </div>
            {userId !== null && post.author_id === userId ?
                <div className="d-flex flex-column posts-details-actions-div">
                    <div className="posts-details-edit-button" onClick={() => setEditRedirect(true)}>
                        <MdEdit color="white" style={{ width: "30px", height: "30px" }} />
                    </div>

                    <div className="posts-details-delete-button" onClick={() => setShow(true)} >
                        <MdDelete color="white" style={{ width: "30px", height: "30px" }} />
                    </div>
                </div> :
                null
            }
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Body>
                    <div className="d-flex flex-column">
                        <div className="justify-content-center">
                            <b style={{ color: "#e27e22" }}>¿Está seguro que desea borrar esta alerta?</b>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <Button style={{ backgroundColor: "#e34c3c", borderColor: "white" }} onClick={deleteHandler}>Borrar</Button>
                            <Button style={{ backgroundColor: "#edc00f", borderColor: "white" }} className="ml-2" onClick={() => setShow(false)}>Cancelar</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <PictureModal
                show={showImg}
                handleClose={() => setShowImg(false)}
                imgSrc={imgUrl}
            />
        </Fragment >
    );
}

export default PostDetails;