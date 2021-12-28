import React, { Component } from "react";
import swal from "sweetalert";
import axios from "axios";

export default class Logout extends Component {
  render() {
    const token = JSON.parse(localStorage.getItem("token"));
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      axios
        .post(
          "http://localhost:8000/api/logout",
          {},
          {
            headers,
          }
        )
        .then((response) => {
          localStorage.removeItem("token");
          swal({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            button: "ok!",
          });
          window.location.href = '/login'; //this.props.history.push('/login');
        });
    });
    return <div></div>; // 083 798 4498
  }
}
