import React from "react"
import "./Card.css"

const card = (props) => (
    <div className="Card">
        {props.children}
    </div>
)

export default card