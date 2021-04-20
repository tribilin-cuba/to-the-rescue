import React from "react"
import "./Toolbar.css"
import Logo from "../Logo/Logo"
import NavigationItems from "../NavigationItems/Navigationitems"

const toolbar = (props) => (
    <header className="Toolbar">
        {/* <div className="Logo">
            <Logo toggleClick={props.toggleClick} />
        </div> */}
        <nav className="DesktopOnly">
            <NavigationItems menuClicked={props.toggleClick} />
        </nav>
    </header>
)

export default toolbar