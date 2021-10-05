import { GrInstagram } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex-container">
        <div className="flex-section">
          <h4 className="txt-header">Sobre nosotros</h4>
          <p className="txt-desc">
            Tribilin's Nuestra intención es concentrar toda la información
            dispersa en las redes sobre mascotas en adopción, abandonadas,
            perdidas o en estado crítico, para que sea más fácil encontrarles un
            hogar. <a href="https://tribilin.netlify.app/about-us">Lee mas</a>
          </p>
        </div>
        <div className="flex-section">
          <h4 className="txt-header">¿Por qué el nombre Tribilin?</h4>
          <p className="txt-desc">
            Tribilin es un perrito callejero que hace 7 años fue adoptado por la
            familia de una de nuestras desarrolladoras. Es por animalitos como
            él que decidimos comenzar el proyecto, entonces qué mejor nombre que
            el suyo.
          </p>
        </div>
        <div className="flex-section">
          <h4 className="txt-header">Cómo Colaborar</h4>
          <p className="txt-desc">
            Tribilin es un proyecto open source. Tú también puedes colaborar!
            Visita nuestro{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/josejorgers/to-the-rescue"
            >
              repositorio en GitHub.{" "}
            </a>
            Todo aporte es bienvenido!
          </p>
        </div>
      </div>
      <div className="social-container">
        <h4 className="txt-header">Cómo Colaborar</h4>
        <p className="txt-desc">
          Síguenos en nuestras redes sociales y cuéntanos qué crees de Tribilin.
          Tu opinión es importante para nosotros.
        </p>
        <div className="social-icons">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/tribilin_cuba/?hl=es"
          >
            <GrInstagram size="30" />
          </a>{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/Tribilin-100383072360000"
          >
            <ImFacebook2 size="30" />
          </a>{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:tribilincuba@gmail.com"
          >
            <HiOutlineMail size="45" />
          </a>
        </div>
      </div>
      <small className="txt-copy-right">Tribilin © 2021</small>
    </footer>
  );
}
