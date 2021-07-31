import React from "react"
import "./TopHeader.css"
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "../../store/actions";
import UserIcon from "../Layout/UserIcon/UserIcon";
import MenuIcon from "../Layout/MenuIcon/MenuIcon";

function TopHeader({ title, smallTitle }) {
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.userName)

    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">{title}</h4>
                <div className="d-flex ">
                    <UserIcon userName={userName} logOutHandler={() => {
                        dispatch({ type: LOG_OUT })
                        window.flash("Ha cerrado sesion correctamente", "success")
                    }} />
                    <MenuIcon authenticated={userName !== null} />
                </div>
            </div>

            <div className="PostBold PostSmall">{smallTitle}</div>
        </div >
    )
}

export default TopHeader