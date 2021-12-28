import React, { Component } from "react";
import NavTab from "../../data/RegisterNavTab";
import { Link } from "react-router-dom";

export default class RNavTab extends Component {
  render() {
    return (
      <ul className="nav-tabs nav nav-justified">
        {NavTab.map((tab, key) => {
          let active = tab.path === window.location.pathname ? "active" : "";
          return (
            <li className="nav-item" key={key}>
              <Link to={tab.path} className={"nav-link " + active}>
                <span className="badge badge-pill bg-primary text-white">
                  {tab.id}
                </span>
                <span className="ml-1">{tab.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
