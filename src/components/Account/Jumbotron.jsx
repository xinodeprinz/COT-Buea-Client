import React, { Component } from "react";
import axios from "axios";

export default class Jumbotron extends Component {
  state = { student: null };
  render() {
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .get("http://localhost:8000/api/user", { headers })
        .then((response) => {
          if (this.state.student === null) {
            this.setState({ student: response.data });
          }
        });
    });
    const body = this.state.student ? (
      <div className="container text-white">
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="text-uppercase">University of NdeTek</h3>
            <h4>Name: {this.state.student.name}</h4>
            <h4>Matricule: {this.state.student.matricule}</h4>
            <h4>Faculty: {this.state.student.faculty}</h4>
            <h4>Department: {this.state.student.department}</h4>
          </div>
          <div>
            <img
              src={
                "http://localhost:8000/storage/" + this.state.student.image_url
              }
              className="img-fluid"
              id="profile-image"
            />
          </div>
        </div>
      </div>
    ) : (
      <h1 className="text-white container">Loading...</h1>
    );
    return <div className="jumbotron bg-primary border-radius-0">{body}</div>;
  }
}
