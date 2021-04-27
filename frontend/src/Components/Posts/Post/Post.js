import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Layout/Card/Card"

const post = (props) => {
    return (
        <Card color="lightblue">
            <div className="d-flex flex-column flex-lg-row align-items-center">
                <img src={props.path} className="img-fluid rounded col-12 col-lg-6" alt="" />
                <small>{props.title}</small>
                <div className="d-flex flex-column col-12 col-lg-6 align-items-center">
                    <small className="mr-3 ml-3">Sexo: {props.sex}</small>
                </div >
                <small>Edad: {props.age}</small>
                <div className="d-flex flex-row mt-5">
                    <Link to={"/post-details/" + props.id} className="ml-auto" type="button">Detalles</Link>
                </div>
            </div>
        </Card >
    );
}

export default post;