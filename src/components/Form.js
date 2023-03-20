import React, { Component } from "react";

class Form extends Component {
  render() {
    let experiences = [];
    let education = [];

    for (let i = 0; i < this.props.experience.length; i++) {
      let expButtons = [];
      if (this.props.experience.length > 1) {
        expButtons.push(
          <div className="button-container">
            <button className="add" onClick={this.props.onAddExp}>
              Add
            </button>
            <button className="delete" onClick={this.props.onDeleteExp}>
              Delete
            </button>
          </div>
        );
      } else if (this.props.experience.length <= 1) {
        expButtons.push(
          <div className="button-container">
            <button className="add" onClick={this.props.onAddExp}>
              Add
            </button>
          </div>
        );
      }

      experiences.push(
        <div className="work-experience" key={i} data-count={i}>
          <input
            type="text"
            id="company"
            placeholder="Company"
            onChange={this.props.onExperienceChange}
            value={this.props.experience[i].company}
          />
          <input
            type="text"
            id="position"
            placeholder="Position"
            onChange={this.props.onExperienceChange}
            value={this.props.experience[i].position}
          />
          <input
            type="text"
            id="job-start-date"
            placeholder="Start Date"
            onChange={this.props.onExperienceChange}
            value={this.props.experience[i].positionStart}
          />
          <input
            type="text"
            id="job-end-date"
            placeholder="End Date"
            onChange={this.props.onExperienceChange}
            value={this.props.experience[i].positionEnd}
          />
          <textarea
            rows={4}
            cols={30}
            maxLength={1000}
            id="description"
            placeholder="Description"
            onChange={this.props.onExperienceChange}
            value={this.props.experience[i].description}
          />

          {expButtons}
        </div>
      );
    }
    for (let i = 0; i < this.props.education.length; i++) {
      let eduButtons = [];
      if (this.props.education.length > 1) {
        eduButtons.push(
          <div className="button-container">
            <button className="add" onClick={this.props.onAddEdu}>
              Add
            </button>
            <button className="delete" onClick={this.props.onDeleteEdu}>
              Delete
            </button>
          </div>
        );
      } else if (this.props.education.length <= 1) {
        eduButtons.push(
          <div className="button-container">
            <button className="add" onClick={this.props.onAddEdu}>
              Add
            </button>
          </div>
        );
      }
      education.push(
        <div className="education-experience" key={i} data-count={i}>
          <input
            type="text"
            id="university"
            placeholder="University"
            onChange={this.props.onEducationChange}
            value={this.props.education[i].university}
          />
          <input
            type="text"
            id="major"
            placeholder="Major"
            onChange={this.props.onEducationChange}
            value={this.props.education[i].major}
          />
          <input
            type="text"
            id="uni-start-date"
            placeholder="Start Date"
            onChange={this.props.onEducationChange}
            value={this.props.education[i].universityStart}
          />
          <input
            type="text"
            id="uni-end-date"
            placeholder="End Date"
            onChange={this.props.onEducationChange}
            value={this.props.education[i].universityEnd}
          />

          {eduButtons}
        </div>
      );
    }

    return (
      <form>
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
