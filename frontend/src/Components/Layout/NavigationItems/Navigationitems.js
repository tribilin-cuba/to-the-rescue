import React from 'react'
import "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem"

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem clicked={props.menuClicked} link="/" active>Menu</NavigationItem>
        {/* <NavigationItem link="/" ></NavigationItem> */}
    </ul>
)

export default navigationItems