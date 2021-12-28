import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import NavTab from "../../data/CourseNavTabs";
import { Link } from "react-router-dom";
import DummyData from "../../data/DummyData"; //to be deleted

export default class FinalRegisteredCourses extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="nav-tabs nav nav-justified text-capitalize mt-5">
                {NavTab.map((item, id) => {
                  const active =
                    item.path === window.location.pathname ? "active" : "";
                  return (
                    <li className="nav-item" id={id}>
                      <Link to={item.path} className={"nav-link " + active}>
                        {item.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="text-uppercase text-primary">
                      <tr>
                        <th>#</th>
                        <th>Course Code</th>
                        <th>Course Titles</th>
                        <th>Credit Values</th>
                        <th>Course Masters</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-capitalize">
                      {DummyData.map((data, id) => {
                        return (
                          <tr id={id}>
                            <td>{++id}</td>
                            <td>{data.code}</td>
                            <td>{data.title}</td>
                            <td>{data.value}</td>
                            <td>{data.master}</td>
                            <td>
                              <button className="btn btn-sm btn-outline-danger">
                                <i className="fas fa-trash mr-1"></i>
                                Drop
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6" className="text-center font-weight-bold text-primary text-uppercase">
                                Total Credit value: 16
                            </td>
                        </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary text-capitalize"
                    type="button"
                  >
                    <i className="fas fa-download mr-1"></i>
                    Download Registered Courses
                  </button>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
