import React from 'react'
import "./Logo.css"

const logo = (props) => (
    <div>
        <img onClick={props.toggleClick} style={{ height: 30 }} src="./logo512.png" alt="Al Rescate" className="Logo"></img>
    </div>
)

export default logo;