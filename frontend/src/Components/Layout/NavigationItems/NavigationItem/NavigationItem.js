import React from "react"
import { Link } from "react-router-dom"
import "./NavigationItem.css"

const navigationItem = (props) => (
    <li className="NavigationItem">
        <Link to={{ pathname: props.link }}>
            {props.icon && <span className="NavigationIcon">{props.icon}</span>}
            <span className="NavigationText">{props.children}</span>
        </Link>
    </li>
)

export default navigationItem