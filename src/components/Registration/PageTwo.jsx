import React, { Component } from "react";
import CarouselCard from "../CarouselCard";
import people from "../../images/people.jpg";
import Faculty from "../../data/Faculty";
import RNavTab from "./RNavTab";
import CarouselControl from "../CarouselControl";

export default class PageTwo extends Component {
  componentDidMount() {
    if (!localStorage.getItem("student-info")) {
      this.props.history.push("/student-info");
    }
  }
  state = { id: "", faculty: "" };

  handleSubmit = (e, faculty, id) => {
    e.preventDefault();
    this.state.id = id;
    this.state.faculty = faculty;
    localStorage.setItem("faculty", JSON.stringify(this.state));
    this.props.history.push("/select-department");
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card center-form">
            <div className="container">
              <div className="card-header">
                <RNavTab />
              </div>
              <div className="card-body bg-primary text-white">
                <div
                  className="carousel slide"
                  id="carousel"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {Faculty.map((items, key) => {
                      return (
                        <div
                          className={"carousel-item " + items[0].active}
                          key={key}
                        >
                          <div className="row">
                            {items[1].map((value, key1) => {
                              return (
                                <div className="col-md-6" key={key1}>
                                  <CarouselCard
                                    id={value.id}
                                    handleSubmit={this.handleSubmit}
                                    faculty={value.name}
                                    image={people}
                                    text={value.text}
                                  />
                                </div>
                              );
                            })}
                          </div>
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
