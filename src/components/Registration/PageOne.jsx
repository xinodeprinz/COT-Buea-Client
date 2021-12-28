import React, { Component } from "react";
import Data from "../../data/RegisterPageOne";
import RNavTab from "./RNavTab";
export default class PageOne extends Component {
    state = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        subDivision: '',
        placeOfBirth: '',
        phoneNumber: '',
        gender: '',
        country: '',
        region: ''
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('student-info', JSON.stringify(this.state));
        this.props.history.push('/select-faculty');
    }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card center-form">
            <div className="container">
              <div className="card-header">
                <RNavTab/>
              </div>
              <div className="card-body bg-primary text-white">
                <form
                  className="needs-validation"
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <div className="row form-group">
                    {Data[0].map((input, key) => {
                      return (
                        <div className="col-md-4" key={key}>
                          <label htmlFor={input.name}>{input.label}</label>
                          <input
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            className="form-control"
                            onChange={this.handleInput}
                            required
                          />
                          <div className="invalid-feedback">
                            {input.feedback}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row form-group">
                    {Data[1].map((input, key) => {
                      return (
                        <div className="col-md-4" key={key}>
                          <label htmlFor={input.name}>{input.label}</label>
                          <input
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            className="form-control"
                            onChange={this.handleInput}
                            required
                          />
                          <div className="invalid-feedback">
                            {input.feedback}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row form-group">
                    {Data[2].map((input, key) => {
                      return (
                        <div className="col-md-4" key={key}>
                          <label htmlFor={input.name}>{input.label}</label>
                          <select
                            name={input.name}
                            className="form-control"
                            onChange={this.handleInput}
                            required
                          >
                            {input.data.map((values, key1) => {
                              return (
                                <option key={key1} value={values.value}>
                                  {values.text}
                                </option>
                              );
                            })}
                          </select>
                          <div className="invalid-feedback">
                            {input.feedback}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-info">
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
