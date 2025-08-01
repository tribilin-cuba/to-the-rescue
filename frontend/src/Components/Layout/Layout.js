import React, { Fragment } from "react";
import "./Layout.css"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
import { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Layout extends Component {

    sideDrawerClosedHandler = () => {
        this.props.onCloseSideDrawer();
    }

    sideDrawerToggleHandler = () => {
        if (this.props.showSideDrawer) {
            this.props.onCloseSideDrawer();
        } else {
            this.props.onOpenSideDrawer();
        }
    }

    render() {
        return (
            <Fragment>
                <Toolbar 
                    sideDrawerToggle={this.sideDrawerToggleHandler}
                />
                <SideDrawer 
                    open={this.props.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        showSideDrawer: state.showSideDrawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenSideDrawer: () => dispatch({ type: actionTypes.OPEN_SIDE_DRAWER }),
        onCloseSideDrawer: () => dispatch({ type: actionTypes.CLOSE_SIDE_DRAWER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)