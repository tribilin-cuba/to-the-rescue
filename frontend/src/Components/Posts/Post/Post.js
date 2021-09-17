import React, { useEffect, useState } from "react";
import "./Post.css"
import { Date } from "core-js";
import { Card, Spinner } from "react-bootstrap";
import { DETA_API_KEY, DETA_PROJECT_ID, DETA_URL, TOY_DETA_ID, TOY_DETA_KEY } from "../../../Constants/constants";
import { Link } from "react-router-dom";

function Post({ id, animal, alert_type, municipality, date, description, from, picture_path, province }) {
    if (description === "")
        description = `${animal}:${alert_type}`

    let d = new Date(date)
    const formattedDate = d.toLocaleDateString("es-ES")
    const preview = description.substring(0, 35) + "..."
    const detaDriveName = 'photos'
    const projectId = DETA_PROJECT_ID || TOY_DETA_ID
    const urlSuffix = `files/download?name=${picture_path}`

    const imgUrl = picture_path === "" ? "/default.png" : `${DETA_URL}${projectId}/${detaDriveName}/${urlSuffix}`

    const [img, setImg] = useState(null)

    // Fetch the image using the imgUrl and set the state. Add authotization headers
    useEffect(() => {
        if (imgUrl !== "/default.png") {
            fetch(imgUrl, { headers: { "X-Api-Key": DETA_API_KEY || TOY_DETA_KEY } })
                .then(response => response.text())
                .then(text => {
                    const pict = "data:image/png;base64," + text
                    setImg(pict)
                })
        }
        else
            setImg(imgUrl)
    }, [imgUrl])

    return (
        <Card className="PostCard mt-2">
            <Card.Body style={{ padding: "0px" }}>
                <Link className="Post d-flex post-link"
                    to={`/post-details/${id}/${from}`}

                >
                    <div>
                        {
                            !img ?
                                <Spinner variant="dark" animation="border" className="m-2" /> :
                                <img
                                    src={img}
                                    className="img-fluid post-image-preview"
                                    alt="preview"
                                />
                        }
                    </div>
                    <div className="d-flex flex-column align-items-start m-2 PostWidth PostHeight">
                        <div className='d-flex justify-content-between PostWidth'>
                            <h6 className={alert_type}>{alert_type}</h6>
                            <div className="PostXSmall">{municipality || province}</div>
                        </div>
                        <div className="PostSmall PostBold">{preview}</div>
                        <div className="PostSmall justify-self-end">{formattedDate}</div>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    );
}

export default Post;