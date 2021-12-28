import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import axios from "axios";
import swal from "sweetalert";

export default class PayFee extends Component {
  state = {
    amount: "50",
    description: "Payment of school fee.",
    phoneNumber: "",
    hasPaidFees: false,
  };
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .get("http://localhost:8000/api/has-paid-fee", { headers })
        .then((response) => {
          if (response.data.status === 200) {
            this.setState({
              hasPaidFees: true,
            });
          }
        });
    });
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.phoneNumber.length !== 9 ||
      this.state.phoneNumber[0] !== "6" ||
      (this.state.phoneNumber[1] !== "5" &&
        this.state.phoneNumber[1] !== "7" &&
        this.state.phoneNumber[1] !== "8" &&
        this.state.phoneNumber[1] !== "9")
    ) {
      swal({
        title: "Invalid Phone Number",
        text: "Enter either an MTN or an Orange number to make payment.",
        icon: "error",
        button: "ok",
      });
    } else {
      const token = JSON.parse(localStorage.getItem("token"));
      const headers = {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      };
      axios.defaults.withCredentials = true;
      axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
        axios
          .post("http://localhost:8000/api/dummy-school-fee", this.state, { headers }) //real route: school-fee
          .then((response) => {
            if (response.data.status === 200) {
              swal({
                title: "Payment Successful!",
                text: response.data.message,
                icon: "success",
                button: "ok",
              });
              this.props.history.push("/dashboard");
            }
          });
      });
    }
  };
  render() {
    var body = !this.state.hasPaidFees ? (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8">
              <div className="d-flex mt-5">
                <img
                  src="http://localhost:8000/storage/images/mtn.jpg"
                  width="300"
                  alt=""
                  className="img-fluid mx-1"
                />
                <img
                  src="http://localhost:8000/storage/images/orange.jpg"
                  width="300"
                  alt=""
                  className="img-fluid mx-1"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header font-weight-bold text-uppercase">
                  Fee Payment
                </div>
                <div className="card-body bg-primary text-white">
                  <form
                    className="needs-validation"
                    onSubmit={this.handleSubmit}
                    noValidate
                  >
                    <div className="form-group">
                      <label>Phone Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">+237</div>
                        </div>
                        <input
                          type="number"
                          name="phoneNumber"
                          placeholder="Payment Number"
                          onChange={this.handleInput}
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="invalid-feedback">
                        phone number is required
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-info btn-block" id="pay" type="submit">
                        Pay Fee
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (
      <div className="container" style={{ marginTop: 200 }}>
        <div className="alert alert-success text-center py-3">
          <strong>Congratulations! </strong>
          You've paid your school fee.
        </div>
      </div>
    );
    return (
      <div>
        <Navbar />
        {body}
      </div>
    );
  }
}
