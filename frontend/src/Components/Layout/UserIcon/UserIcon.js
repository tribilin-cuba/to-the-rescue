import { Dropdown } from "react-bootstrap"
import React from "react"


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
            <Dropdown drop="left">
                <Dropdown.Toggle as={CustomToggle} id="user-options" >Custom Toggle</Dropdown.Toggle>
                <Dropdown.Menu  >
                    {userName ?
                        <div>
                            <Dropdown.Item>Hola {userName}</Dropdown.Item>
                            <Dropdown.Item
                                onClick={logOutHandler}
                            >
                                Cerrar sesion
                                        </Dropdown.Item>
                        </div>
                        :
                        <div>
                            <Dropdown.Item href="/log-in">Iniciar sesion</Dropdown.Item>
                            <Dropdown.Item href="/register">Registrarse</Dropdown.Item>
                        </div>
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
export default UserIcon