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
    let experiences = [];
    let schools = [];

    for (
      let i = 0;
      i < this.props.experienceCount;
      i++ // eslint-disable-next-line no-lone-blocks
    ) {
      experiences.push(
        <div className="job-info" key={i} data-count={i}>
          <div className="job-history">
            <div className="job">
              <div className="resume-company">{this.props.jobs[i].company}</div>
              <div className="resume-position">
                {this.props.jobs[i].position}
              </div>
            </div>
            <div className="job-tenure">
              <div className="resume-work-start-date">
                {this.props.jobs[i].positionStart}
              </div>
              <div className="resume-work-end-date">
                {this.props.jobs[i].positionEnd}
              </div>
            </div>
          </div>
          <div className="job-description">
            {this.props.jobs[i].description}
          </div>
        </div>
      );
    }

    for (
      let i = 0;
      i < this.props.educationCount;
      i++ // eslint-disable-next-line no-lone-blocks
    ) {
      schools.push(
        <div className="education-info" key={i} data-count={i}>
          <div className="education-university">
            <div className="resume-university">
              {this.props.schools[i].university}
            </div>
            <div className="resume-major">{this.props.schools[i].major}</div>
          </div>
          <div className="education-tenure">
            <div className="resume-education-start-date">
              {this.props.schools[i].universityStart}
            </div>
            <div className="resume-education-end-date">
              {this.props.schools[i].UniversityEnd}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="resume-preview">
        <div className="resume-personal-info">
          <h2 className="resume-name">{this.props.name}</h2>
          <div className="contact-info">
            <div className="phone-container" src={phone}>
              <img className="phone-image" src={phone} alt="phone"></img>
              <div className="resume-phone">{this.props.phone}</div>
            </div>
            <div className="email-container">
              <img className="email-image" src={email} alt="email"></img>
              <div className="resume-email">{this.props.email}</div>
            </div>
            <div className="location-container">
              <img
                className="location-image"
                src={location}
                alt="location"
              ></img>
              <div className="resume-location">{this.props.location}</div>
            </div>
            <div className="github-container">
              <img className="github-image" src={github} alt="github"></img>
              <div className="resume-github">{this.props.github}</div>
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
          {experiences}
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
          {/* <div className="education-info">
            <div className="education-university">
              <div className="resume-university">{this.props.university}</div>
              <div className="resume-major">{this.props.major}</div>
            </div>
            <div className="education-tenure">
              <div className="resume-education-start-date">
                {this.props.universityStart}
              </div>
              <div className="resume-education-end-date">
                {this.props.UniversityEnd}
              </div>
            </div>
          </div> */}
          {schools}
        </div>
      </div>
    );
  }
}

export default Resume;
