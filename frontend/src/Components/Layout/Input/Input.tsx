import React from "react"

const input = ({config, label, changed}: {config: any, label: string, changed: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
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

    switch (config.type) {
        case ('input'):
            inputElement = <input style={style} onChange={changed} {...config} />;
            break;
        case ('textarea'):
            inputElement = <textarea style={style} onChange={changed} {...config} />;
            break;
        default:
            inputElement = <input style={style} onChange={changed} {...config} />
    }
    return (
        <div style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}>{label}</label>
            {inputElement}
        </div>
    )
}




export default input