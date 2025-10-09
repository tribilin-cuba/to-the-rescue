import React, { Fragment } from "react";
import "./Layout.css"
import Toolbar from "./Toolbar/Toolbar"

function Layout({ children }) {
    return (
        <Fragment>
            <Toolbar />
            <main className="Content">
                {children}
            </main>
        </Fragment>
    );
}

export default Layout