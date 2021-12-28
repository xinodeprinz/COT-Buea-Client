import React, { Component } from "react";
import DCarousel from "../DCarousel";
import people from "../../images/people.jpg";
import Department from "../../data/Department";
import RNavTab from "./RNavTab";
import CarouselControl from "../CarouselControl";

export default class PageThree extends Component {
  componentDidMount() {
    if (!localStorage.getItem("student-info")) {
      this.props.history.push("/student-info");
    } else if (!localStorage.getItem("faculty")) {
      this.props.history.push("/select-faculty");
    }
  }
  state = { department: "", mat: "" };

  handleSubmit = (e, department, mat) => {
    e.preventDefault();
    this.state.department = department;
    this.state.mat = mat;
    localStorage.setItem("department", JSON.stringify(this.state));
    this.props.history.push("/parent-info");
  };
  render() {
    const faculty = JSON.parse(localStorage.getItem("faculty"));
    let departments = null;
    if (faculty.id === 0) {
      departments = Department[0];
    } else if (faculty.id === 1) {
      departments = Department[1];
    } else if (faculty.id === 2) {
      departments = Department[2];
    } else if (faculty.id === 3) {
      departments = Department[3];
    } else if (faculty.id === 4) {
      departments = Department[4];
    } else if (faculty.id === 5) {
      departments = Department[5];
    } else if (faculty.id === 6) {
      departments = Department[6];
    } else if (faculty.id === 7) {
      departments = Department[7];
    }
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card center-form">
            <div className="container">
              <div className="card-header">
                <RNavTab />
              </div>
              <div className="card-body row bg-primary text-white">
                <div
                  className="carousel slide col-md-6 mx-auto"
                  id="carousel"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {departments.map((item, key) => {
                      return (
                        <div
                          className={"carousel-item " + item.active}
                          key={key}
                        >
                          <DCarousel
                            handleSubmit={this.handleSubmit}
                            department={item.name}
                            mat={item.mat}
                            image={people}
                            text={item.text}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <CarouselControl />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
