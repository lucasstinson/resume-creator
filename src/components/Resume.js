import React, { Component } from "react";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import location from "../images/location.svg";
import github from "../images/github.svg";
import briefcase from "../images/briefcase.svg";
import education from "../images/school.svg";

class Resume extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="resume-preview">
        <div className="resume-personal-info">
          <h2 className="resume-name">John Doe</h2>
          <div className="contact-info">
            <div className="phone-container" src={phone}>
              <img className="phone-image" src={phone} alt="phone"></img>
              <div className="resume-phone">123-456-7890</div>
            </div>
            <div className="email-container">
              <img className="email-image" src={email} alt="email"></img>
              <div className="resume-email">JohnDoe@gmail.com</div>
            </div>
            <div className="location-container">
              <img
                className="location-image"
                src={location}
                alt="location"
              ></img>
              <div className="resume-location">Generic, NY</div>
            </div>
            <div className="github-container">
              <img className="github-image" src={github} alt="github"></img>
              <div className="resume-github">github.com/generic-github</div>
            </div>
          </div>
        </div>
        <div className="resume-work-experience">
          <div className="work-experience-header">
            <img
              className="work-experience-image"
              src={briefcase}
              alt="briefcase"
            ></img>
            <h3 className="resume-work-experience-title">WORK EXPERIENCE</h3>
          </div>
          <div className="job-info">
            <div className="job-history">
              <div className="job">
                <div className="resume-company">Fake Company,</div>
                <div className="resume-position">Fake Position</div>
              </div>
              <div className="job-tenure">
                <div className="resume-work-start-date">01/01/2020 |</div>
                <div className="resume-work-end-date">Current</div>
              </div>
            </div>
            <div className="job-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
        </div>
        <div className="resume-education">
          <div className="education-header">
            <img
              className="education-image"
              src={education}
              alt="graudation cap"
            ></img>
            <h3 className="resume-work-experience-title">EDUCATION</h3>
          </div>
          <div className="education-info">
            <div className="education-university">
              <div className="resume-university">Fake University</div>
              <div className="resume-major">Fake Major</div>
            </div>
            <div className="education-tenure">
              <div className="resume-education-start-date">01/01/2010 |</div>
              <div className="resume-education-end-date">05/01/2015</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
