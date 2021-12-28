import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  render() {
    const token = "1|8d5UyrzmN7nzLhoUO4FqdwHj3urEXVRgMyfE6g8p";
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };
    axios.defaults.withCredentials = true;
    axios.get("https://transaction-manager-cmr.herokuapp.com/sanctum/csrf-cookie").then(() => {
      axios
        .get("https://transaction-manager-cmr.herokuapp.com/api/user", { headers })
        .then((response) => {
          console.log(response.data);
        });
    });
    return <div>Test</div>;
  }
}
