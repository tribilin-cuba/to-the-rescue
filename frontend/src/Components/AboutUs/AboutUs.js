import React, { Fragment } from "react"
import "./AboutUs.css"
import TopHeader from "../TopHeader/TopHeader";
import { GrInstagram } from "react-icons/gr"
import { ImFacebook2 } from "react-icons/im"
import { HiOutlineMail } from "react-icons/hi"

function AboutUs() {
    return (
        <Fragment>
            <TopHeader title="Sobre nosotros" smallTitle="" goHome={true} />
            <div className="mt-3">
                <div style={{ textAlign: "initial" }}>
                    <p>
                        Bienvenido a Tribilin, sitio web para publicar sobre mascotas vulnerables en Cuba.
                    </p>
                    <p>
                        Nuestra intencion es concentrar toda la informacion dispersa en las redes
                        sobre mascotas en adopcion, abandonadas, perdidas o en estado critico, para que sea mas facil
                        encontrarles un hogar.
                    </p>
                    <p>
                        Somos un quipo de tres, conformado por estudiantes y egresados de la Universidad de La Habana
                        en las carreras de Disenno y Ciencias de la Computacion.
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
                        Siguenos en nuestras redes sociales y cuentanos que crees de Tribilin.
                        Tu opinion es importante para nosotros.
                    </p>
                    <div>
                        <GrInstagram size="20" />{" "}
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tribilin_cuba/?hl=es">
                            @tribilin_cuba
                        </a>
                    </div>
                    <div className="mt-2">
                        <ImFacebook2 size="19" />{" "}
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/Tribilin-100383072360000">
                            Tribilin
                        </a>
                    </div>
                    <div className="mt-2">
                        <HiOutlineMail size="23" />{" "}
                        <a rel="noreferrer" target="_blank" href="mailto:tribilincuba@gmail.com">
                            tribilincuba@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AboutUs;
