import React from "react";
import "./Post.css"
import { Date } from "core-js";
import { Card } from "react-bootstrap";

function Post({ id, animal, alert_type, municipality, date, description }) {
    if (description === "")
        description = `${animal}:${alert_type}`

    let d = new Date(date)
    const formattedDate = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
    const preview = description.substring(0, 35) + "..."


    return (
        <Card style={{ borderRadius: "10px 10px 0px 10px" }} className="mt-2">
            <Card.Body style={{ padding: "0px" }}>
                <a className="Post d-flex" href={"/post-details/" + id} style={{ color: "#464646" }}>
                    <div>
                        <img src="/default.png" className="img-fluid" alt="" style={{ height: "80px", width: "95px" }} />
                    </div>
                    <div className="d-flex flex-column align-items-start m-2 PostWidth PostHeight">
                        <div className='d-flex justify-content-between PostWidth'>
                            <h6 className={alert_type}>{alert_type}</h6>
                            <div className="PostXSmall">{municipality}</div>
                        </div>
                        <div className="PostSmall PostBold">{preview}</div>
                        <div className="PostSmall justify-self-end">{formattedDate}</div>
                    </div>
                </a>
            </Card.Body>
        </Card >
    );
}

export default Post;