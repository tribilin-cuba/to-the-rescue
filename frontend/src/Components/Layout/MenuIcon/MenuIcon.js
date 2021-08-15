import { Fragment } from "react"
import { Dropdown } from "react-bootstrap";
import React from "react"
import { IoInformationCircle } from "react-icons/io5"
import { MdFavorite } from "react-icons/md"
import { GiDogHouse } from "react-icons/gi"
import { Link } from "react-router-dom";

function MenuIcon({ authenticated, goHome, showAll }) {
    const CustomToggle = React.forwardRef(({ onClick }, ref) => (
        <img alt="menu-icon" src="/menu.png" className="ml-3" style={{ width: "25px" }} ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }} />
    ));
    return (
        <Fragment>
            <Dropdown drop="down">
                <Dropdown.Toggle as={CustomToggle} id="user-options" >Custom Toggle</Dropdown.Toggle>
                <Dropdown.Menu >
                    {
                        goHome &&
                        <Dropdown.Item className="mt-3 d-flex align-content-end" >
                            <Link to="/">
                                <GiDogHouse style={{ color: "#e27e22" }} size="20" />
                                <b style={{ color: "#464646" }} className="ml-2">Volver al inicio</b>
                            </Link>
                        </Dropdown.Item>
                    }
                    {
                        authenticated && (!goHome || showAll) ?
                            <Dropdown.Item className="mt-3  d-flex align-content-end"  >
                                <Link to="/my-posts">
                                    <MdFavorite style={{ color: "#e27e22", verticalAlign: "top" }} size="20" />
                                    <b style={{ color: "#464646", verticalAlign: "bottom" }} className="ml-2">Mis Alertas</b>
                                </Link>
                            </Dropdown.Item> :
                            null
                    }
                    {
                        window.location.href.includes("/about-us") ?
                            null :
                            <Dropdown.Item className="mt-3 d-flex align-content-end" >
                                <Link to="/about-us">
                                    <IoInformationCircle size="20" style={{ color: "#e27e22" }} />
                                    <b style={{ color: "#464646 " }} className="ml-2">Sobre nosotros</b>
                                </Link>
                            </Dropdown.Item>
                    }
                </Dropdown.Menu>
            </Dropdown>
        </Fragment>
    )
}
export default MenuIcon