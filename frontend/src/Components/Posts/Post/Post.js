import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Layout/Card/Card"
import "./Post.css"

const post = (props) => {
    const states = ["PostAdoption", "PostLost", "PostAbandon", "PostCritical"]
    return (
        <Card>
            <div className="Post d-flex">
                <div className="PostImageDiv">
                    <img src="/default.png" className="img-fluid" alt="" />
                </div>
                <div className="d-flex flex-column align-items-start m-2 PostWidth justify-content-between PostHeight">
                    <div className='d-flex justify-content-between PostWidth'>
                        <h6 className={states[props.id % 4]}>Estado</h6>
                        <div className="PostXSmall">Vedado</div>
                    </div>
                    <div className="PostSmall PostBold">Descripcion</div>
                    <div className="PostSmall justify-self-end">6/5/2021</div>
                    {/* <div className="d-flex flex-row mt-5">
                        <Link to={"/post-details/" + props.id} className="ml-auto" type="button">Detalles</Link>
                    </div> */}
                </div>
            </div>
        </Card >
    );
}

export default post;