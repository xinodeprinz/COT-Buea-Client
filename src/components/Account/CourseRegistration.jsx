import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Data from "../../data/LevelsAndSemesters";
import NavTab from "../../data/CourseNavTabs";
import { Link } from 'react-router-dom'
import DummyData from '../../data/DummyData'  //to be deleted

export default class CourseRegistration extends Component {
  state = {
    courseNames: [],
  };
  handleCheckBox = (e) => {
    const index = this.state.courseNames.indexOf(e.target.value);
    if (index === -1) {
      this.state.courseNames.push(e.target.value);
    } else {
      this.state.courseNames.splice(index, 1);
    }
  };
  handleRegistration = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="nav-tabs nav nav-justified text-capitalize mt-5">
                {NavTab.map((item, id) => {
                  const active = item.path === window.location.pathname ? 'active' : ''
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
          <div className="row container mx-auto">
            <div className="col-md-8 mx-auto mt-5 mb-3">
              <h4 className="text-center text-primary text-uppercase mb-3">
                Course Registraton
              </h4>
              <form>
                {Data.map((item, id) => {
                  return (
                    <div className="row form-group" id={id}>
                      <label className="text-primary font-weight-bold text-uppercase">
                        {item.label}
                      </label>
                      <select name="level" className="form-control">
                        {item.data.map((text, id) => {
                          return (
                            <option value={text} id={id}>
                              {text}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  );
                })}
                <div className="row form-group">
                  <button
                    className="btn btn-primary btn-block text-capitalize"
                    type="submit"
                  >
                    Get Courses For Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <form onSubmit={this.handleRegistration}>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="text-uppercase text-primary">
                      <tr>
                        <th>#</th>
                        <th></th>
                        <th>Course Code</th>
                        <th>Course Titles</th>
                        <th>Credit Values</th>
                        <th>Course Masters</th>
                      </tr>
                    </thead>
                    <tbody className="text-capitalize">
                      {DummyData.map((data, id) => {
                        return (
                          <tr id={id}>
                            <td>{++id}</td>
                            <td>
                              <input
                                type="checkbox"
                                name="course"
                                className="checkbox"
                                value={data.title}
                                onClick={this.handleCheckBox}
                              />
                            </td>
                            <td>{data.code}</td>
                            <td>{data.title}</td>
                            <td>{data.value}</td>
                            <td>{data.master}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary text-capitalize"
                    type="submit"
                  >
                    Register selected courses
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
