import React, { Fragment } from "react"
import "./Modal.css"
import Backdrop from "../Backdrop/Backdrop"


const modal = ({show, modalClosed, children}: {show: boolean, modalClosed: () => void, children: React.ReactNode}) => (
    <Fragment>
        <Backdrop show={show} clicked={modalClosed} />
        <div className="Modal"
            style={{
                transform: show ? 'translateY(0)' : "translateY(-100vh)",
                opacity: show ? '1' : '0'
            }}
        >
            {children}

        </div >
    </Fragment>
)

export default modal