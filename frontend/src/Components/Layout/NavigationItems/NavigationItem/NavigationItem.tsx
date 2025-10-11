import React from "react"
import { Link } from "react-router-dom"
import "./NavigationItem.css"

const navigationItem = ({link, children}: {link: string, children: React.ReactNode}) => (
    <li className="NavigationItem">
        <Link to={{ pathname: link }}>{children}</Link>
    </li>
)

export default navigationItem