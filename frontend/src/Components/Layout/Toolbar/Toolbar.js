import React from "react"
import "./Toolbar.css"
import { FaBars } from "react-icons/fa"

const toolbar = (props) => (
    <header className="Toolbar flex align-items-end justify-content-center">
        <button 
            className="SideDrawer-toggle"
            onClick={props.sideDrawerToggle}
            aria-label="Toggle navigation menu"
        >
            <FaBars />
        </button>
        <img alt="logo" src="/logo.png"></img>
    </header>
)

export default toolbar