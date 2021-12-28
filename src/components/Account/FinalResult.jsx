import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Data from "../../data/LevelsAndSemesters";
import DummyData from "../../data/DummyData"; //to be deleted

export default class FinalResult extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row container mx-auto">
            <div className="col-md-8 mx-auto mt-5 mb-3">
              <h4 className="text-center text-primary text-uppercase mb-3">
                End Of Semester Result
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
                    Get Final Result
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="text-uppercase text-primary">
                    <tr>
                      <th>#</th>
                      <th>Course Code</th>
                      <th>Course Titles</th>
                      <th>Credit Values</th>
                      <th>CA Marks</th>
                      <th>Exam Marks</th>
                      <th>Grades</th>
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
                          <td>25</td>
                          <td>65</td>
                          <td>A</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan="1"
                        className="text-center font-weight-bold text-primary text-uppercase"
                      >
                        Total Credit: 16
                      </td>
                      <td
                        colSpan="1"
                        className="text-center font-weight-bold text-primary text-uppercase"
                      >
                        Credit Earned: 12
                      </td>
                      <td
                        colSpan="1"
                        className="text-center font-weight-bold text-primary text-uppercase"
                      >
                        Total Exam Mark: 120 / 150
                      </td>
                      <td
                        colSpan="2"
                        className="text-center font-weight-bold text-primary text-uppercase"
                      >
                        Courses Passed: 3
                      </td>
                      <td
                        colSpan="2"
                        className="text-center font-weight-bold text-primary text-uppercase"
                      >
                        GPA: 3.50
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
                  Download Final Result
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
