import React, { Fragment } from "react"
import "./AboutUs.css"
import TopHeader from "../TopHeader/TopHeader";
import { GrInstagram } from "react-icons/gr"
import { ImFacebook2 } from "react-icons/im"
import { HiOutlineMail } from "react-icons/hi"

function AboutUs() {
    return (
        <Fragment>
            <TopHeader title="Sobre nosotros" smallTitle="" goHome={true} showAll={true} />
            <div className="mt-3">
                <div style={{ textAlign: "initial" }}>
                    <p>
                        Bienvenido a Tribilin, sitio web para publicar sobre mascotas vulnerables en Cuba.
                    </p>
                    <p>
                        Nuestra intención es concentrar toda la información dispersa en las redes
                        sobre mascotas en adopción, abandonadas, perdidas o en estado crítico, para que sea más fácil
                        encontrarles un hogar.
                    </p>
                    <p>
                        Somos un quipo de tres, conformado por estudiantes y egresados de la Universidad de La Habana
                        en las carreras de Diseño y Ciencias de la Computación.
                    </p>
                </div>
            </div>
            <div className="mt-3">
                <div className="about-us-div">
                    <h5>¿Por qué el nombre Tribilin?</h5>
                </div>
                <div style={{ textAlign: "initial" }}>
                    <p>
                        Tribilin es un perrito callejero que hace 7 años fue adoptado por la familia de una de nuestras desarrolladoras.
                        Es por animalitos como él que decidimos comenzar el proyecto, entonces qué mejor nombre que el suyo.
                    </p>
                </div>
            </div>
            <div className="mt-3">
                <div className="about-us-div">
                    <h5>Cómo Colaborar</h5>
                </div>
                <div style={{ textAlign: "initial" }}>
                    <p>Tribilin es un proyecto open source. Tú también puedes colaborar! Visita nuestro{" "}
                        <a rel="noreferrer" target="_blank" href="https://github.com/josejorgers/to-the-rescue">repositorio en GitHub. </a>
                        Todo aporte es bienvenido!
                </p>
                </div>
            </div>
            <div className="mt-3">
                <div className="about-us-div">
                    <h5>Contáctanos</h5>
                </div>
                <div style={{ textAlign: "initial" }}>
                    <p>
                        Síguenos en nuestras redes sociales y cuéntanos qué crees de Tribilin.
                        Tu opinión es importante para nosotros.
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
