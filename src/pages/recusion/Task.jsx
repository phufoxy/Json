import React, { Component } from "react";
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { TaskComponent } from "./components";


class Task extends Component {
  
  render() {
    console.log(this.props.firebase);
    
    return (
      <div>
        <TaskComponent />
      </div>
    );
  }
}

export default Task;
