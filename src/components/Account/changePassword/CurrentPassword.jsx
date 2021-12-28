import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import axios from "axios";
import swal from "sweetalert";

export default class CurrentPassword extends Component {
  state = {
    currentPassword: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("next").innerText = "Checking...";
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost:8000/api/check-current-password", this.state, {
          headers,
        })
        .then((response) => {
          document.getElementById("next").innerText = "Next";
          if (response.data.status === 200) {
            localStorage.setItem(
              "current-password",
              JSON.stringify({ currentPassword: true })
            );
            this.props.history.push("/new-password");
          } else {
            swal({
              title: "Error!",
              text: response.data.message,
              icon: "error",
              button: "ok!",
            });
          }
        });
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container center-form font-weight-bold">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header text-uppercase">
                Change Account Password
              </div>
              <div className="card-body bg-primary">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      placeholder="Current Password"
                      className="form-control"
                      required
                      onChange={this.handleInput}
                    />
                    <div className="invalid-feedback">
                      current password is required
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-info btn-block"
                      type="submit"
                      id="next"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
