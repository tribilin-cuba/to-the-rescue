import React from 'react'
import "./Logo.css"

export default function Logo ({toggleClick}: {toggleClick?: () => void}) {
    return (
    <div>
        <img onClick={toggleClick} style={{ height: 30 }} src="./logo512.png" alt="Al Rescate" className="Logo"></img>
    </div>
)
}
