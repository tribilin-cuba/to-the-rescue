import React, { Fragment } from "react";
import "./Layout.css"
import Toolbar from "./Toolbar/Toolbar"
import { Component } from "react";

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Toolbar />
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

}

export default Layout