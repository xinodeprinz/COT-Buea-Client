import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import axios from "axios";
import Department from "../../data/Department";
import Navbar from "./Navbar";

export default class UploadCourses extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
      data: "",
      department: '',
      level: '',
      semester: '',
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];

    var name = file.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      this.setState({ data: this.convertToJson(data) });
    };
    reader.readAsBinaryString(file);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    return result;
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // axios.defaults.withCredentials = true;
    // axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
    //   axios
    //     .post("http://localhost:8000/api/upload-courses", this.state)
    //     .then((response) => {
    //       console.log(response);
    //     });
    // });
  };
  render() {
    const levels = [
      "Level 200",
      "Level 300",
      "Level 400",
      "Level 500",
      "Level 600",
      "Level 700",
      "Level 800",
    ];
    const semesters = ["First Semester", "Second Semester"];
    const faculty = JSON.parse(localStorage.getItem("admin-faculty"));
    let departments = null;
    if (faculty.id === 0) {
      departments = Department[0];
    } else if (faculty.id === 1) {
      departments = Department[1];
    } else if (faculty.id === 2) {
      departments = Department[2];
    } else if (faculty.id === 3) {
      departments = Department[3];
    } else if (faculty.id === 4) {
      departments = Department[4];
    } else if (faculty.id === 5) {
      departments = Department[5];
    } else if (faculty.id === 6) {
      departments = Department[6];
    } else if (faculty.id === 7) {
      departments = Department[7];
    }
    return (
      <>
        {/* <Navbar /> */}
        <div className="container center-form">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <h5 className="text-uppercase text-primary font-weight-bold text-center">
                NdeTek Administration Panel
              </h5>
              <div className="card">
                <div className="card-header text-uppercase font-weight-bold text-primary">
                  Upload Courses
                </div>
                <div className="card-body bg-primary text-white font-weight-bold text-uppercase">
                  <form
                    onSubmit={this.handleSubmit}
                    className="needs-validation"
                    noValidate
                  >
                    <div className="row form-group">
                      <label>select department</label>
                      <select
                        name="department"
                        className="form-control text-uppercase"
                        required
                        onChange={this.handleInput}
                      >
                        <option value="">Select a department</option>
                        {departments.map((department, id) => {
                          return (
                            <option id={id} value={department.name}>{department.name}</option>
                          )
                        })}
                      </select>
                      <div className="invalid-feedback">
                        select a department
                      </div>
                    </div>
                    <div className="row form-group">
                      <label>select level</label>
                      <select
                        name="level"
                        className="form-control text-uppercase"
                        required
                        onChange={this.handleInput}
                      >
                        <option value="">Select a level</option>
                        {levels.map((level, id) => {
                          return (
                            <option value={level} id={id}>
                              {level}
                            </option>
                          );
                        })}
                      </select>
                      <div className="invalid-feedback">
                        select a level
                      </div>
                    </div>
                    <div className="row form-group">
                      <label>select semester</label>
                      <select
                        name="semester"
                        className="form-control text-uppercase"
                        required
                        onChange={this.handleInput}
                      >
                        <option value="">Select a semester</option>
                        {semesters.map((semester, id) => {
                          return (
                            <option value={semester} id={id}>
                              {semester}
                            </option>
                          );
                        })}
                      </select>
                      <div className="invalid-feedback">
                        select a semester
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="mr-5">upload course</label>
                      <br />
                      <input
                        type="file"
                        id="file"
                        ref="fileUploader"
                        onChange={this.filePathset.bind(this)}
                        name="course"
                        accept=".xlsx"
                        required
                      />
                      <div className="invalid-feedback">upload courses</div>
                    </div>
                    <div className="form-group row d-flex justify-content-between text-capitalize">
                      <Link to="/admin-aim" className="btn btn-info">
                        Back
                      </Link>
                      <button type="submit" className="btn btn-secondary">
                        <i className="fas fa-cloud-upload-alt mr-1"></i>
                        Upload Courses
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
