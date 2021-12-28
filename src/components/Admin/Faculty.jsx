import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Faculty extends Component {
  state = {
    faculty: "",
    data: [
      { id: 0, faculty: "Faculty of Arts" },
      { id: 1, faculty: "Faculty of Science" },
      { id: 2, faculty: "Faculty of Education" },
      { id: 3, faculty: "Faculty of Engineering" },
      { id: 4, faculty: "College of Technology" },
      { id: 5, faculty: "Faculty of Health Sciences" },
      { id: 6, faculty: "Faculty of Law" },
      { id: 7, faculty: "Faculty of Politics" },
    ],
  };
  handleInput = (e) => {
    this.setState({ faculty: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.data.forEach((data) => {
      if (data.faculty === this.state.faculty) {
        localStorage.setItem("admin-faculty", JSON.stringify(data));
        this.props.history.push("/admin-password");
      }
    });
    console.log(this.state);
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
                      <label>Select Faculty</label>
                      <select
                        name="faculty"
                        className="form-control text-uppercase"
                        required
                        onChange={this.handleInput}
                      >
                        <option value="">Select Faculty</option>
                        {this.state.data.map((item, id) => {
                          return (
                            <option value={item.faculty} id={id}>
                              {item.faculty}
                            </option>
                          );
                        })}
                      </select>
                      <div className="invalid-feedback">select a faculty</div>
                    </div>
                    <div className="form-group row">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block"
                      >
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
