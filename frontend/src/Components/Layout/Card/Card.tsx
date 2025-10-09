import React from "react"
import "./Card.css"

const card = (props) => (
    <div className="Card">
        <div className="card-body">
            {props.children}
        </div>
    </div>
)

export default card