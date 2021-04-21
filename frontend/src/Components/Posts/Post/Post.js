import React from "react";
import "./Post.css"

const post = (props) => {
    return (
        <div className="mx-auto col-10 col-lg-6 mt-3 mb-3" >
            <div className="Post card">
                <div className="card-body">
                    <div className="d-flex flex-column flex-lg-row align-items-center">
                        <img src={props.path} className="img-fluid rounded col-12 col-lg-6" alt="" />
                        <div className="d-flex flex-column col-12 col-lg-6 align-items-center">
                            <small className="mr-3 ml-3">Sexo: {props.sex}</small>
                            <small>Edad: {props.age}</small>
                            <div className="d-flex flex-row mt-5">
                                <button className="ml-auto" onClick={() => props.deleteHandler(props.id)}>Eliminar</button>
                                <button className="ml-auto" onClick={() => props.selectHandler(props.id)}>Detalles</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}

export default post;