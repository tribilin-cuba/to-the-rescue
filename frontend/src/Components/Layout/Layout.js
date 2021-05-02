import React, { Fragment } from "react";
import "./Layout.css"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import { Component } from "react";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    openSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true })
    }
    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    render() {
        return (
            <Fragment>
                <Toolbar toggleClick={this.openSideDrawerHandler} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.closeSideDrawerHandler} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

}

export default Layout