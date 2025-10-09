import React from "react"
import { Link } from "react-router-dom"
import "./NavigationItem.css"

const navigationItem = (props) => (
    <li className="NavigationItem">
        <Link to={{ pathname: props.link }}>{props.children}</Link>
    </li>
)

export default navigationItem