import { Dropdown } from "react-bootstrap"
import React from "react"
import { IoLogOut, IoLogIn, IoPersonAdd } from "react-icons/io5";
import { Link } from "react-router-dom";


function UserIcon({ userName, logOutHandler }) {
    const CustomToggle = React.forwardRef(({ onClick }, ref) => (
        <img alt="user-icon" src="/user.png" style={{ width: "25px" }} ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }} />
    ));
    return (
        <div className="TopHeaderIcon">
            <Dropdown drop="down">
                <Dropdown.Toggle as={CustomToggle} id="user-options" >Custom Toggle</Dropdown.Toggle>
                <Dropdown.Menu>
                    {userName ?
                        <div>
                            <Dropdown.Item style={{ color: "#e27e22" }}>Hola {userName}</Dropdown.Item>
                            <Dropdown.Item onClick={logOutHandler}>
                                <IoLogOut style={{ color: "#e27e22", verticalAlign: "top" }} size="20" />
                                <b style={{ verticalAlign: "bottom", color: "#464646" }}>Cerrar sesión</b>
                            </Dropdown.Item>
                        </div>
                        :
                        <div>
                            <Dropdown.Item className="mt-2 d-flex align-content-end"  >
                                <Link to="/log-in">
                                    <IoLogIn size="20" style={{ color: "#e27e22" }} />
                                    <b className="ml-2" style={{ color: "#464646" }}>Iniciar sesión</b>
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="mt-3 d-flex align-content-end"  >
                                <Link to="/register">
                                    <IoPersonAdd style={{ color: "#e27e22" }} size="20" />
                                    <b className="ml-2" style={{ color: "#464646" }}> Registrarse</b>
                                </Link>
                            </Dropdown.Item>
                        </div>
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default UserIcon