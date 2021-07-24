import { Dropdown } from "react-bootstrap"
import React from "react"
import { IoLogInOutline, IoPersonAddOutline, IoLogOutOutline } from "react-icons/io5";


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
                            <Dropdown.Item
                                onClick={logOutHandler}
                                style={{ color: "#e27e22" }}
                            >
                                <IoLogOutOutline size="20" /> <b>Cerrar sesion</b>
                            </Dropdown.Item>
                        </div>
                        :
                        <div>
                            <Dropdown.Item className="mt-2 d-flex align-content-end" href="/log-in" style={{ color: "#e27e22" }}>
                                <IoLogInOutline size="20" />  <b className="ml-2">Iniciar sesion</b>
                            </Dropdown.Item>
                            <Dropdown.Item className="mt-3 d-flex align-content-end" href="/register" style={{ color: "#e27e22" }}>
                                <IoPersonAddOutline size="20" /><b className="ml-2"> Registrarse</b>
                            </Dropdown.Item>
                        </div>
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default UserIcon