import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class Password extends Component {
  state = { password: "" };
  handleInput = (e) => {
    this.setState({ password: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('faculty-password', JSON.stringify(this.state));
    console.log(this.state);
    this.props.history.push('/admin-aim');
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div className="container center-form">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="card">
                <div className="card-header text-uppercase font-weight-bold text-primary">
                  NdeTek Administration Panel
                </div>
                <div className="card-body bg-primary text-white font-weight-bold text-uppercase">
                  <form
                    onSubmit={this.handleSubmit}
                    className="needs-validation"
                    noValidate
                  >
                    <div className="row form-group">
                      <label>Faculty Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control text-uppercase"
                        placeholder="Enter Faculty Password"
                        required
                        onChange={this.handleInput}
                      />
                      <div className="invalid-feedback">enter a password</div>
                    </div>
                    <div className="form-group row d-flex justify-content-between text-capitalize">
                      <Link to="/admin-faculty" className="btn btn-info">
                        Back
                      </Link>
                      <button type="submit" className="btn btn-secondary">
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
