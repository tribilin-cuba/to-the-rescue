import React, { Fragment } from "react";
import "./Layout.css"
import Toolbar from "./Toolbar/Toolbar"

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <Fragment>
            <Toolbar />
            <main className="Content">
                {children}
            </main>
        </Fragment>
    );
}