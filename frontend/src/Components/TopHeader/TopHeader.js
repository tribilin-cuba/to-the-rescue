import React from "react"
import "./TopHeader.css"
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../../store/actions";
import UserIcon from "../Layout/UserIcon/UserIcon";
import MenuIcon from "../Layout/MenuIcon/MenuIcon";
import { useHistory } from "react-router";

function TopHeader({ title, smallTitle, goHome }) {
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.userName)
    const history = useHistory()
    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">{title}</h4>
                <div className="d-flex ">
                    <UserIcon userName={userName} logOutHandler={() => {
                        dispatch({ type: LOG_OUT })
                        history.push("/")
                        window.flash("Ha cerrado sesión correctamente", "success")
                    }} />
                    <MenuIcon authenticated={userName !== null} goHome={goHome} />
                </div>
            </div>

            <div className="PostBold PostSmall">{smallTitle}</div>
        </div >
    )
}

export default TopHeader