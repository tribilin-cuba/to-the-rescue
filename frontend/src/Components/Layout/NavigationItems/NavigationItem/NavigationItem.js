import React from "react"
import "./NavigationItem.css"

const navigationItem = (props) => (
    <li className="NavigationItem">
        <a onClick={props.clicked}>{props.children}</a>
    </li>
)

export default navigationItem