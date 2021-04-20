import React from "react"
import "./SideDrawer.css"
import Backdrop from "../Backdrop/Backdrop"
import Logo from "../Logo/Logo"
import NavigationItems from "../NavigationItems/Navigationitems"

const sideDrawer = (props) => {

    let attachedClasses = ["SideDrawer", "Close"]
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className="Logo">
                    <Logo />
                </div>
                {/* <nav>
                    <NavigationItems />
                </nav> */}
            </div>
        </div>
    )
}

export default sideDrawer