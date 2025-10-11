import React from 'react'
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/">Inicio</NavigationItem>
    </ul>
)

export default navigationItems