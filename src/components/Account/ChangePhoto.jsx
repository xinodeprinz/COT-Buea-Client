import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import emptyImage from "../../images/empty.jpg";
import axios from "axios";
import swal from "sweetalert";

export default class ChangePhoto extends Component {
  state = {
    imageUrl: "",
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
  handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("updateBtn").innerText = "Updating...";
    const formdata = new FormData();
    formdata.append("imageUrl", this.state.imageUrl);
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post("http://localhost:8000/api/update-profile-photo", formdata, {
          headers,
        })
        .then((response) => {
          if (response.data.status === 200) {
            document.getElementById("updateBtn").innerText = "Updated";
            swal({
              title: "Success!",
              text: response.data.message,
              icon: "success",
              button: "ok!",
            });
            this.props.history.push("/dashboard");
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
                Change Profile Photo
              </div>
              <div className="card-body bg-primary text-center">
                <form
                  className="needs-validation"
                  noValidate
                  onSubmit={this.handleSubmit}
                >
                  <div className="form-group">
                    <img
                      src={emptyImage}
                      alt=""
                      style={{ width: "100%", height: 120 }}
                      id="image"
                      className="img-fluid mt-3"
                      required
                    />
                    <input
                      type="file"
                      id="imageInput"
                      hidden
                      onChange={(e) => {
                        this.getImage(e.target.files);
                      }}
                      required
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
                  <div className="form-group">
                    <button
                      className="btn btn-secondary"
                      type="submit"
                      id="updateBtn"
                    >
                      Update Profile
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
