import React from "react";
import { Link } from "react-router-dom";
import "./Post.css"

const post = (props) => {
    return (
        <div className="mx-auto col-10 col-lg-6 mt-3 mb-3" >
            <div className="Post card">
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <img src={props.path} className="img-fluid rounded col-12 col-lg-6" alt="" />
                        <small>{props.title}</small>
                        <div className="d-flex flex-column col-12 col-lg-6 align-items-center">
                            <small className="mr-3 ml-3">Sexo: {props.sex}</small>
                            <small>Edad: {props.age}</small>
                            <div className="d-flex flex-row mt-5">
                                <Link to={"/post-details/" + props.id} className="ml-auto" type="button">Detalles</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default post;