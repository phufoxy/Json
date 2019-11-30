import React, { Component } from "react";
import axios from "axios";
import normalize from "json-api-normalizer";
import normalizeArray from "json-api-normalize";

class JsonPages extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    this.onLoadData();
  }

  onLoadData = () => {
    axios
      .request({
        method: "GET",
        url: "http://127.0.0.1:8000/api/v1/users"
      })
      .then(response => {
        this.onSetUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSetUsers = data => {
    this.setState({
      users: data
    });
  };
  render() {
    // console.log(this.state.users);
    // const data = normalize(this.state.users);
    // console.log(normalize(this.state.users).get(["id", "title"]));
    if (this.state.users.data) {
      console.log(this.state.users);

      console.log(
        normalizeArray(this.state.users).get([
          "id",
          "type",
          "email",
          "img",
          "name",
          "updated_at",
          "roles.id",
          "roles.type",
          "roles.name"
        ])
      );
    }

    return <div>json rest api</div>;
  }
}

export default JsonPages;
