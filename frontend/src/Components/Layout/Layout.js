import React, { Fragment } from "react";
import "./Layout.css"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import { Component } from "react";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })
    }
    render() {
        return (
            <Fragment>
                <Toolbar toggleClick={this.sideDrawerOpenHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

}

export default Layout