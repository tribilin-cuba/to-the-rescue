import React from "react";
import Card from "../../Layout/Card/Card"
import "./Post.css"
import { Date } from "core-js";

function Post({ id, animal, alert_type, municipality, date, description }) { //TODO: Add description
    if (description === "")
        description = `${animal}:${alert_type}`

    let d = new Date(date)
    const formattedDate = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`

    return (
        <Card>
            <a className="Post d-flex" href={"/post-details/" + id} style={{ color: "black" }}> {/* TODO: Set color right*/}
                <div className="PostImageDiv">
                    <img src="/default.png" className="img-fluid" alt="" />
                </div>
                <div className="d-flex flex-column align-items-start m-2 PostWidth justify-content-between PostHeight">
                    <div className='d-flex justify-content-between PostWidth'>
                        <h6 className={alert_type}>{alert_type}</h6>
                        <div className="PostXSmall">{municipality}</div>
                    </div>
                    <div className="PostSmall PostBold">{description}</div>
                    <div className="PostSmall justify-self-end">{formattedDate}</div>
                    {/* <div className="d-flex flex-row mt-5">
                        <Link to={"/post-details/" + props.id} className="ml-auto" type="button">Detalles</Link>
                    </div> */}
                </div>
            </a>
        </Card >
    );
}

export default Post;