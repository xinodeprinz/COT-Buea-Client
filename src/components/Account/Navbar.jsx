import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/ndetek-logo.png";
import Data from "../../data/ANavbar";
import Modal from "../Modal";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <Modal title="Logout" text="Are you sure you want to logout?"/>
        <nav className="navbar navbar-light navbar-expand-md bg-white nav-acc">
          <div className="container font-weight-bold">
            <Link to="/dashboard" className="navbar-brand">
              <img src={Logo} alt="NdeTek" className="img-fluid" id="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#nav-links"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse text-uppercase"
              id="nav-links"
            >
              <ul className="navbar-nav ml-auto blue">
                {Data[0].map((item, id) => {
                  return (
                    <li className="nav-item ml-3" id={id}>
                      <Link to={item.path} className="nav-link">
                        <i className={item.icon + " mr-1"}></i>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}

                {Data[1].map((link, id) => {
                  return (
                    <li className="nav-item dropdown ml-3" id={id}>
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="dropdown01"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className={link.icon + " mr-1"}></i>
                        {link.name}
                      </Link>
                      <div class="dropdown-menu" aria-labelledby="dropdown01">
                        {link.data.map((i, id) => {
                          return (
                            <Link className="dropdown-item" to={i.path} id={id}>
                              {i.name}
                            </Link>
                          );
                        })}
                        <button
                          type="button"
                          id="logout"
                          data-toggle="modal"
                          data-target="#modal"
                          className="dropdown-item text-primary text-uppercase"
                        >
                          Logout
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
