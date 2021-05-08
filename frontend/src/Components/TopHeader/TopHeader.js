import React from "react"
import "./TopHeader.css"
import { Link } from "react-router-dom"

const topHeader = () => {
    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">Alertas</h4>
                <div className="d-flex ">
                    <div className="TopHeaderIcon">test</div>
                    <div className="TopHeaderIcon">test</div>
                </div>
            </div>

            <div className="PostBold PostSmall">Ultimas alertas recibidas</div>
        </div>
    )
}

export default topHeader