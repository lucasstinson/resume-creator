import React, { Component } from "react";
import uniqid from "uniqid";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let experiences = [];
    let education = [];
    if (this.props.experienceCount > 1) {
      for (
        let i = 0;
        i < this.props.experienceCount;
        i++ // eslint-disable-next-line no-lone-blocks
      ) {
        experiences.push(
          <div className="work-experience" key={i} data-count={i}>
            <input
              type="text"
              id="company"
              placeholder="Company"
              onChange={this.props.onExperienceChange}
            />
            <input
              type="text"
              id="position"
              placeholder="Position"
              onChange={this.props.onExperienceChange}
            />
            <input
              type="text"
              id="job-start-date"
              placeholder="Start Date"
              onChange={this.props.onExperienceChange}
            />
            <input
              type="text"
              id="job-end-date"
              placeholder="End Date"
              onChange={this.props.onExperienceChange}
            />
            <textarea
              rows={4}
              cols={30}
              maxLength={1000}
              id="description"
              placeholder="Description"
              onChange={this.props.onExperienceChange}
            />
            <div className="button-container">
              <button className="add" onClick={this.props.onAddExp}>
                Add
              </button>
              <button className="delete" onClick={this.props.onDeleteExp}>
                Delete
              </button>
            </div>
          </div>
        );
      }
    } else if (this.props.experienceCount <= 1) {
      for (
        let i = 0;
        i < this.props.experienceCount;
        i++ // eslint-disable-next-line no-lone-blocks
      ) {
        experiences.push(
          <div className="work-experience" key={i} data-count={i}>
            <input
              type="text"
              id="company"
              placeholder="Company"
              onChange={this.props.onExperienceChange}
            />
            <input
              type="text"
              id="position"
              placeholder="Position"
              onChange={this.props.onExperienceChange}
            />
            <input
              type="text"
              id="job-start-date"
              placeholder="Start Date"
              onChange={this.props.onExperienceChange}
            />
            <input
              type="text"
              id="job-end-date"
              placeholder="End Date"
              onChange={this.props.onExperienceChange}
            />
            <textarea
              rows={4}
              cols={30}
              maxLength={1000}
              id="description"
              placeholder="Description"
              onChange={this.props.onExperienceChange}
            />
            <div className="button-container">
              <button className="add" onClick={this.props.onAddExp}>
                Add
              </button>
            </div>
          </div>
        );
      }
    }
    if (this.props.educationCount > 1) {
      for (
        let i = 0;
        i < this.props.educationCount;
        i++ // eslint-disable-next-line no-lone-blocks
      ) {
        education.push(
          <div className="education-experience" key={i} data-count={i}>
            <input
              type="text"
              id="university"
              placeholder="University"
              onChange={this.props.onEducationChange}
            />
            <input
              type="text"
              id="major"
              placeholder="Major"
              onChange={this.props.onEducationChange}
            />
            <input
              type="text"
              id="uni-start-date"
              placeholder="Start Date"
              onChange={this.props.onEducationChange}
            />
            <input
              type="text"
              id="uni-end-date"
              placeholder="End Date"
              onChange={this.props.onEducationChange}
            />
            <div className="button-container">
              <button className="add" onClick={this.props.onAddEdu}>
                Add
              </button>
              <button className="delete" onClick={this.props.onDeleteEdu}>
                Delete
              </button>
            </div>
          </div>
        );
      }
    } else if (this.props.educationCount <= 1) {
      for (
        let i = 0;
        i < this.props.educationCount;
        i++ // eslint-disable-next-line no-lone-blocks
      ) {
        education.push(
          <div className="education-experience" key={i} data-count={i}>
            <input
              type="text"
              id="university"
              placeholder="University"
              onChange={this.props.onEducationChange}
            />
            <input
              type="text"
              id="major"
              placeholder="Major"
              onChange={this.props.onEducationChange}
            />
            <input
              type="text"
              id="uni-start-date"
              placeholder="Start Date"
              onChange={this.props.onEducationChange}
            />
            <input
              type="text"
              id="uni-end-date"
              placeholder="End Date"
              onChange={this.props.onEducationChange}
            />
            <div className="button-container">
              <button className="add" onClick={this.props.onAddEdu}>
                Add
              </button>
            </div>
          </div>
        );
      }
    }
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="personal-container">
          <h2 className="personal-information-title">Personal Information</h2>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={this.props.onPersonalChange}
          />
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            onChange={this.props.onPersonalChange}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={this.props.onPersonalChange}
          />
          <input
            type="text"
            id="location"
            placeholder="Location"
            onChange={this.props.onPersonalChange}
          />
          <input
            type="text"
            id="github"
            placeholder="Github"
            onChange={this.props.onPersonalChange}
          />
        </div>
        <div className="experience-container">
          <h2 className="work-experience-title">Work Experience</h2>
          {experiences}
        </div>
        <div className="education-container">
          <h2 className="education-title">Education</h2>
          {education}
        </div>
      </form>
    );
  }
}

export default Form;
