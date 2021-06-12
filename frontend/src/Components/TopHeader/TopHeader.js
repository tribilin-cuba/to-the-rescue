import React from "react"
import "./TopHeader.css"

const topHeader = () => {
    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">Alertas</h4>
                <div className="d-flex ">
                    <div className="TopHeaderIcon"><img alt="user-icon" src="/user.png" style={{ width: "25px" }} /></div>
                    <div className="TopHeaderIcon ml-3"><img alt="menu-icon" src="/menu.png" style={{ width: "25px" }} /></div>
                </div>
            </div>

            <div className="PostBold PostSmall">Ultimas alertas recibidas</div>
        </div>
    )
}

export default topHeader