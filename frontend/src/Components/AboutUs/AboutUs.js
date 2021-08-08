import React, { Fragment } from "react"
import "./AboutUs.css"
import TopHeader from "../TopHeader/TopHeader";

function AboutUs() {
    return (
        <Fragment>
            <TopHeader title="Sobre nosotros" smallTitle="No se que poner aqui" goHome={true} />
            <div className="mt-3">
                <div style={{ textAlign: "initial" }}>
                    <p>
                        PENDIENTE
                    </p>
                </div>
            </div>
            <div className="mt-3">
                <div className="about-us-div">
                    <h5>Por que el nombre Tribilin?</h5>
                </div>
                <div style={{ textAlign: "initial" }}>
                    <p>
                        Tribilin es un perrito callejero que hace 7 annos fue adoptado por la familia de una de nuestras desarrolladoras.
                        Es por animalitos como el que decidimos comenzar el proyecto, entonces que mejor nombre que el suyo.
                    </p>
                </div>
            </div>
            <div className="mt-3">
                <div className="about-us-div">
                    <h5>Como Colaborar</h5>
                </div>
                <div style={{ textAlign: "initial" }}>
                    <p>Tribilin es un proyecto open source. Tu tambien puedes colaborar! Visita nuestro{" "}
                        <a rel="noreferrer" target="_blank" href="https://github.com/josejorgers/to-the-rescue">repositorio en GitHub. </a>
                        Todo aporte es bienvenido!
                </p>
                </div>
            </div>
            <div className="mt-3">
                <div className="about-us-div">
                    <h5>Contactanos</h5>
                </div>
                <div style={{ textAlign: "initial" }}>
                    <p>
                        PENDIENTE
                    </p>
                </div>
            </div>
        </Fragment>
    )
}
export default AboutUs;
