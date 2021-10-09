import { GrInstagram, GrGithub } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/tribilin_cuba/?hl=es"
      >
        <GrInstagram size="32" />
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
        href="https://github.com/tribilin-cuba/to-the-rescue"
      >
        <GrGithub size="38" />
      </a>{" "}
      <a rel="noreferrer" target="_blank" href="mailto:tribilincuba@gmail.com">
        <HiOutlineMail size="45" />
      </a>
    </footer>
  );
}
