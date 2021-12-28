import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class Aim extends Component {
  state = { aim: "" };
  handleInput = (e) => {
    this.setState({ aim: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('aim', JSON.stringify(this.state));
    if (this.state.aim === 'Upload courses for registration') {
      this.props.history.push('/admin-upload-courses');
    }
    console.log(this.state);
  };
  render() {
    const aims = [
      'Upload courses for registration',
      'Upload CA marks',
      'Upload final exam marks'
    ];
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
                      <label>What do you want?</label>
                      <select
                        name="aim"
                        className="form-control text-uppercase"
                        required
                        onChange={this.handleInput}
                      >
                        <option value="">Select what you want</option>
                        {aims.map((aim, id) => {
                          return (
                            <option value={aim} id={id}>{aim}</option>
                          )
                        })}
                      </select>
                      <div className="invalid-feedback">select what you want</div>
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
