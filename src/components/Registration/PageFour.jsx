import React, { Component } from "react";
import Data from "../../data/RegisterPageTwo";
import emptyImage from "../../images/empty.jpg";
import RNavTab from "./RNavTab";
import { Link } from "react-router-dom";
import axios from "axios";

export default class PageFour extends Component {
  componentDidMount() {
    if (!localStorage.getItem("student-info")) {
      this.props.history.push("/student-info");
    } else if (!localStorage.getItem("faculty")) {
      this.props.history.push("/select-faculty");
    } else if (!localStorage.getItem("department")) {
      this.props.history.push("/select-department");
    }
  }
  state = {
    fatherName: "",
    motherName: "",
    fatherContact: "",
    motherContact: "",
    parentAddress: "",

    imageUrl: "",
    birthCertificate: "",
    GCE_OL: "",
    GCE_AL: "",
  };

  uploadImage = () => {
    document.getElementById("imageInput").click();
  };
  getImage = (files) => {
    let image = files[0];
    const imageField = document.getElementById("image");
    if (image) {
      const reader = new FileReader();
      reader.onload = function () {
        const result = reader.result;
        imageField.src = result;
      };
      reader.readAsDataURL(image);
    }
    this.state.imageUrl = files[0];
  };
  uploadDocuments = (name, files) => {
    this.setState({
      [name]: files[0],
    });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const studentInfo = JSON.parse(localStorage.getItem("student-info"));
    const faculty = JSON.parse(localStorage.getItem("faculty")).faculty;
    const department = JSON.parse(
      localStorage.getItem("department")
    ).department;
    const matricule = this.matricule(
      JSON.parse(localStorage.getItem("department")).mat
    );
    const password = "12345"; //this.password();

    const formData = new FormData();
    formData.append("firstName", studentInfo.firstName);
    formData.append("lastName", studentInfo.lastName);
    formData.append("dateOfBirth", studentInfo.dateOfBirth);
    formData.append("subDivision", studentInfo.subDivision);
    formData.append("placeOfBirth", studentInfo.placeOfBirth);
    formData.append("phoneNumber", studentInfo.phoneNumber);
    formData.append("gender", studentInfo.gender);
    formData.append("country", studentInfo.country);
    formData.append("region", studentInfo.region);

    formData.append("fatherName", this.state.fatherName);
    formData.append("motherName", this.state.motherName);
    formData.append("fatherContact", this.state.fatherContact);
    formData.append("motherContact", this.state.motherContact);
    formData.append("parentAddress", this.state.parentAddress);

    formData.append("birthCertificate", this.state.birthCertificate);
    formData.append("GCE_OL", this.state.GCE_OL);
    formData.append("GCE_AL", this.state.GCE_AL);
    formData.append("imageUrl", this.state.imageUrl);

    formData.append("faculty", faculty);
    formData.append("department", department);

    formData.append("matricule", matricule);
    formData.append("password", password);

    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios.post(`http://localhost:8000/api/register`, formData).then((response) => {
        if (response.data.status === 200) {
          localStorage.clear();
          localStorage.setItem('registered', JSON.stringify({registered: true}));
          this.props.history.push('/thanks');
        }
      });
    });
  };
  matricule = (mat) => {
    const date = new Date();
    const year = date.getFullYear();
    const string = new String(year);
    let num = Math.floor(1000 * Math.random());
    num = num < 100 ? "0" + num : num;
    return mat + string.substring(2, 4) + "A" + num;
  };
  password = () => {
    const data =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-";
    let result = "";
    for (var i = 0; i < 10; i++) {
      result += data[Math.floor(data.length * Math.random())];
    }
    return result;
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
                <form
                  className="needs-validation"
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <div className="row">
                    <div className="col-md-9">
                      <div className="row form-group">
                        {Data[0].map((input, key) => {
                          return (
                            <div className="col-md-6" key={key}>
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
                    </div>
                    <div className="col-md-3">
                      <img
                        src={emptyImage}
                        alt=""
                        style={{ width: "100%", height: 120 }}
                        id="image"
                        className="img-fluid mt-3"
                      />
                      <input
                        type="file"
                        id="imageInput"
                        hidden
                        onChange={(e) => {
                          this.getImage(e.target.files);
                        }}
                        required
                        accept=".png,.jpg,.jpeg"
                      />
                      <button
                        type="button"
                        className="btn btn-info btn-block mt-1"
                        onClick={this.uploadImage}
                        id="imageBtn"
                      >
                        upload image
                      </button>
                      <div className="invalid-feedback">upload an image</div>
                    </div>
                  </div>
                  <div className="row form-group">
                    {Data[2].map((input, key) => {
                      return (
                        <div className="col-md-4" key={key}>
                          <label htmlFor={input.name}>{input.label}</label>
                          <input
                            type="file"
                            name={input.name}
                            onChange={(e) =>
                              this.uploadDocuments(
                                e.target.name,
                                e.target.files
                              )
                            }
                            required
                            accept=".pdf"
                          />
                          <div className="invalid-feedback">
                            {input.feedback}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="form-group d-flex justify-content-between">
                    <Link to="/student-info" className="btn btn-secondary">
                      Back
                    </Link>
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
