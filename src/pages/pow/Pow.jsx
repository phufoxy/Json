import React, { Component } from "react";
import { PowComponent } from "./components";

class Pow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: "Van Phu"
    };
  }

  render() {
    return (
      <div>
        <PowComponent {...this.state} />
      </div>
    );
  }
}

export default Pow;
