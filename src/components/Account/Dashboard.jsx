import React, { Component } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "../Footer";
import axios from "axios";

export default class Dashboard extends Component {
  state = {
    show: false,
    student: null,
  };
  show = () => {
    if (this.state.show) {
      this.setState({
        show: false,
      });
      document.getElementById("show").innerText = "View More";
    } else {
      this.setState({
        show: true,
      });
      document.getElementById("show").innerText = "Hide Details";
    }
  };
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
    if (this.state.student) {
      delete this.state.student.image_url;
    }
    const data = this.state.student ? (
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="text-primary">
              <tr>
                <th>#</th>
                <th>ATTRIBUTES</th>
                <th>VALUES</th>
              </tr>
            </thead>
            <tbody className="text-uppercase">
              {Object.entries(this.state.student).map((item, id) => {
                if (!this.state.show) {
                  if (id < 5) {
                    return (
                      <tr id={id} style={{ width: "100%" }}>
                        <td style={{ width: "20%" }}>{id + 1}</td>
                        <td style={{ width: "40%" }}>{item[0]}</td>
                        <td style={{ width: "40%" }}>{item[1]}</td>
                      </tr>
                    );
                  }
                } else {
                  return (
                    <tr id={id} style={{ width: "100%" }}>
                      <td style={{ width: "20%" }}>{id + 1}</td>
                      <td style={{ width: "40%" }}>{item[0]}</td>
                      <td style={{ width: "40%" }}>{item[1]}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
          <div className="my-2" style={{ float: "right" }}>
            <button className="btn btn-primary" id="show" onClick={this.show}>
              View More
            </button>
          </div>
        </div>
      </div>
    ) : (
      <h1 className="container">Loading...</h1>
    );
    return (
      <div>
        <Navbar />
        <Jumbotron />
        {data}
        <Footer />
      </div>
    );
  }
}
