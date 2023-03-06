import React, { Component } from "react";
import resume from "../images/resume.png";

class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1 className="title">Create Your Resume</h1>
        <img id="resume-image" src={resume} alt="resume icon"></img>
      </div>
    );
  }
}

export default Head;
