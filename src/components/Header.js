import React from "react";
import resume from "../images/resume.png";

class Head extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <h1 className="title">Create Your Resume</h1>
          <img id="resume-image" src={resume} alt="resume icon"></img>
        </div>
        <div className="pdf-print">
          <button className="pdf" onClick={this.props.onDownload}>
            Download Resume
          </button>
        </div>
      </div>
    );
  }
}

export default Head;
