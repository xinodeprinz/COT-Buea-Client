import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";

export default class Info extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <h4 className="text-center font-weight-bold text-uppercase text-primary mt-5">
                About NdeTek
              </h4>
              <p className="text-info text-justify">
                NdeTek is an upcoming technological institution currently based
                in Buea, Cameroon that aims at training young youths in the
                field of technology to produce a better tomorrow. We train
                students for concours in Cameroon and on web development skills
                at affordable prices during the third term holidays. We’ve also
                got past exam papers be it for the GCE Advanced levels, UB past
                semester exams, and various concours in Cameroon. All the papers
                are free and are readily available for downloading.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4 className="text-center font-weight-bold text-uppercase text-primary mt-5">
                About The NdeTek University Application
              </h4>
              <p className="text-info text-justify">
                The Ndetek university application is an app that exits in the
                Web, Andriod and Mac versions available on: The Web, Play Store
                and on the App Store respectively. This App aims at helping university institutions in Cameroon to facilitate:
                <ul className="text-capitalize">
                    <li>Student's Addmission in to the institution</li>
                    <li>Course Registration</li>
                    <li>Payment of School Fee</li>
                    <li>Publication of student's CA and end of Semester Results</li>
                </ul>
                With this application, students' can perform all this actions at the comfort of their homes.
              </p>
              <h5 className="font-weight-bold font-italic">Long Live NdeTek</h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
