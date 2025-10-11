import React from "react"
import "./Toolbar.css"
// import Logo from "../Logo/Logo"
// import NavigationItems from "../NavigationItems/Navigationitems"

export default function Toolbar() {
    return (
        <header className="Toolbar flex align-items-end justify-content-center">
            <img alt="logo" src="/logo.png"></img>
        </header>
    );
}