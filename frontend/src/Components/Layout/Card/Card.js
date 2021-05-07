import React from "react"

const card = (props) => (
    <div className="mx-auto col-10 col-lg-6 mt-3 mb-3"  >
        <div className="card" style={{ "backgroundColor": props.color }}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    </div >
)

export default card