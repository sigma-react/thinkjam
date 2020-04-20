import React, { Component } from "react";
/* The below code is for the header*/
class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img className="header-logo" src="../logo.svg" alt="ThinkJam Logo"/>
                        </a>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;