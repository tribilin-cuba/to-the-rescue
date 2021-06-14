import React from "react"
import "./TopHeader.css"
import { Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <img alt="user-icon" src="/user.png" style={{ width: "25px" }} ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }} />
));

function TopHeader() {
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.userName)

    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">Alertas</h4>
                <div className="d-flex ">
                    <div className="TopHeaderIcon">
                        <Dropdown drop="left">
                            <Dropdown.Toggle as={CustomToggle} id="user-options" >Custom Toggle</Dropdown.Toggle>
                            <Dropdown.Menu  >
                                <Dropdown.Item>Hola {userName} </Dropdown.Item>
                                <Dropdown.Item>Log out</Dropdown.Item>
                                <Dropdown.Item>Hola @user </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="TopHeaderIcon ml-3"><img alt="menu-icon" src="/menu.png" style={{ width: "25px" }} /></div>
                </div>
            </div>

            <div className="PostBold PostSmall">Ultimas alertas recibidas</div>
        </div>
    )
}

export default TopHeader