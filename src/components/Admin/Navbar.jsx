import React, { Component } from "react";
import Logo from "../../images/ndetek-logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md bg-white nav-acc">
        <div className="container font-weight-bold">
          <div className="navbar-brand">
            <img src={Logo} alt="NdeTek" className="img-fluid" id="logo" />
          </div>
        </div>
      </nav>
    );
  }
}
