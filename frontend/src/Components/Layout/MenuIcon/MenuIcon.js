import { Fragment } from "react"
import { Dropdown } from "react-bootstrap";
import React from "react"
import { IoInformationCircleOutline } from "react-icons/io5"
import { MdFavoriteBorder } from "react-icons/md"

function MenuIcon({ authenticated }) {
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
                        authenticated ?
                            <Dropdown.Item className="mt-3  d-flex align-content-end" href="/my-posts" style={{ color: "#e27e22" }} >
                                <MdFavoriteBorder size="20" /> <b className="ml-2">Mis Alertas</b>
                            </Dropdown.Item> :
                            null
                    }

                    <Dropdown.Item className="mt-3 d-flex align-content-end" style={{ color: "#e27e22" }}>
                        <IoInformationCircleOutline size="20" /> <b className="ml-2">Sobre nosotros</b>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Fragment>
    )
}
export default MenuIcon