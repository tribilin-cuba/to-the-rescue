import React from "react"

const input = (props) => {
    let inputElement = null
    const style = {
        outline: "none",
        border: "1px solid #ccc",
        backgroundColor: "white",
        font: "inherit",
        padding: "6px 10px",
        display: "block",
        width: "100%"
    }

    switch (props.config.type) {
        case ('input'):
            inputElement = <input style={style} onChange={props.changed} {...props.config} />;
            break;
        case ('textarea'):
            inputElement = <textarea style={style} onChange={props.changed} {...props.config} />;
            break;
        default:
            inputElement = <input style={style} onChange={props.changed} {...props.config} />
    }
    return (
        <div style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>{props.label}</label>
            {inputElement}
        </div>
    )
}




export default input