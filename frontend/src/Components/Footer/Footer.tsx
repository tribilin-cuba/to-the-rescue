import { GrGithub } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/Tribilin-100383072360000"
      >
        <SiFacebook size="32" />
      </a>{" "}
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/tribilin_cuba/?hl=es"
      >
        <AiFillInstagram size="34" />
      </a>{" "}

      <a rel="noreferrer" target="_blank" href="https://twitter.com/tribilin_cuba">
        <AiFillTwitterCircle size="40" />
      </a>{" "}
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/tribilin-cuba/to-the-rescue"
      >
        <GrGithub size="38" />
      </a>
    </footer>
  );
}
