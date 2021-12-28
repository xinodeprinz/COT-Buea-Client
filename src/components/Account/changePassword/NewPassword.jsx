import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import axios from "axios";
import swal from "sweetalert";

export default class CurrentPassword extends Component {
  componentDidMount() {
    if (!localStorage.getItem("current-password")) {
      this.props.history.push("/dashboard");
    }
  }
  state = {
    newPassword: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("changePassword").innerText = "Changing...";
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost:8000/api/update-password", this.state, {
          headers,
        })
        .then((response) => {
          if (response.data.status === 200) {
            localStorage.removeItem("current-password");
            document.getElementById("changePassword").innerText = "Changed";
            swal({
              title: "Success!",
              text: response.data.message,
              icon: "success",
              button: "ok!",
            });
            this.props.history.push("/login");
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
                    <label>New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      className="form-control"
                      required
                      onChange={this.handleInput}
                    />
                    <div className="invalid-feedback">
                      new password is required
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-info btn-block"
                      type="submit"
                      id="changePassword"
                    >
                      Change Password
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
