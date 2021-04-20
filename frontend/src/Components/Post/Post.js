import React from "react";
import "./Post.css"

const post = (props) => {
    return (
        <div className="mx-auto col-6 mt-3 mb-3" >
            <div className="Post card">
                <div className="card-body d-flex flex-column">
                    <div className="d-flex">
                        <img src={props.path} className="img-fluid rounded" height="150" width="150" alt="" />
                        <small className="mr-3 ml-3">Sexo: {props.sex}</small>
                        <small>Edad: {props.age}</small>
                    </div>
                    <small className="mr-auto">Direccion: {props.address}</small>
                </div>
            </div>
        </div>
    );
}

export default post;