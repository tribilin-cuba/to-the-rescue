import React from "react"
import "./TopHeader.css"
import { logOut } from "../../App/store";
import UserIcon from "../Layout/UserIcon/UserIcon";
import MenuIcon from "../Layout/MenuIcon/MenuIcon";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Hooks/App/App";

function TopHeader({ title, smallTitle, goHome, showAll } : {title: string, smallTitle: string, goHome?: boolean, showAll?: boolean}) {
    const dispatch = useAppDispatch()
    const userName : string | null = useAppSelector((state) => state.app.userName)
    const navigate = useNavigate()
    return (
        <div className='d-flex flex-column TopHeader align-items-start'>
            <div className="d-flex justify-content-between TopHeaderDiv">
                <h4 className="TopHeaderText">{title}</h4>
                <div className="d-flex ">
                    <UserIcon userName={userName} logOutHandler={() => {
                        dispatch(logOut())
                        navigate("/")
                        window.flash("Ha cerrado sesión correctamente", "success")
                    }} />
                    <MenuIcon authenticated={userName !== null} goHome={goHome} showAll={showAll} />
                </div>
            </div>

            <div className="PostBold PostSmall">{smallTitle}</div>
        </div >
    )
}

export default TopHeader