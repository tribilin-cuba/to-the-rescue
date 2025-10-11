import React from "react"
import "./SideDrawer.css"
import Backdrop from "../Backdrop/Backdrop"
import Logo from "../Logo/Logo"
// import NavigationItems from "../NavigationItems/Navigationitems"

export default function SideDrawer ({open, closed}: {open: boolean, closed: () => void}) {

    let attachedClasses = ["SideDrawer", "Close"]
    if (open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <div>
            <Backdrop show={open} clicked={closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo />
                </div>
            </div>
        </div>
    )
}