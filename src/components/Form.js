import React, { Component } from "react";
import uniqid from "uniqid";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let experiences = [];
    let education = [];
    for (
      let i = 0;
      i < this.props.addExperience;
      i++ // eslint-disable-next-line no-lone-blocks
    ) {
      experiences.push(
        <div className="work-experience" key={i} data-count={i}>
          <input
            type="text"
            id="company"
            placeholder="Company"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="position"
            placeholder="Position"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="job-start-date"
            placeholder="Start Date"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="job-end-date"
            placeholder="End Date"
            onChange={this.props.onChange}
          />
          <textarea
            rows={4}
            cols={30}
            maxLength={300}
            id="description"
            placeholder="Description"
            onChange={this.props.onChange}
          />
        </div>
      );
    }
    for (
      let i = 0;
      i < this.props.addEducation;
      i++ // eslint-disable-next-line no-lone-blocks
    ) {
      education.push(
        <div className="education-experience" key={i} data-count={i}>
          <input
            type="text"
            id="university"
            placeholder="University"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="major"
            placeholder="Major"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="uni-start-date"
            placeholder="Start Date"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="uni-end-date"
            placeholder="End Date"
            onChange={this.props.onChange}
          />
        </div>
      );
    }
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="personal-container">
          <h2 className="personal-information-title">Personal Information</h2>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={this.props.onChange}
          />
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="location"
            placeholder="Location"
            onChange={this.props.onChange}
          />
          <input
            type="text"
            id="github"
            placeholder="Github"
            onChange={this.props.onChange}
          />
        </div>
        <div className="experience-container">
          <h2 className="work-experience-title">Work Experience</h2>
          {experiences}
          <div className="button-container">
            <button className="add" onClick={this.props.onClickExp}>
              Add
            </button>
          </div>
        </div>
        <div className="education-container">
          <h2 className="education-title">Education</h2>
          {education}
          <div className="button-container">
            <button className="add" onClick={this.props.onClickEdu}>
              Add
            </button>
          </div>
        </div>
        <div className="create-container">
          <button className="create-button" type="submit">
            Create
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
