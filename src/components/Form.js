import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="personal-container">
          <h2 className="personal-information-title">Personal Information</h2>
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="email" placeholder="Email" />
          <input type="tel" id="phone" placeholder="Phone Number" />
          <input type="text" id="location" placeholder="Location" />
        </div>
        <div className="experience-container">
          <h2 className="work-experience-title">Work Experience</h2>
          <input type="text" id="company" placeholder="Company" />
          <input type="text" id="position" placeholder="Position" />
          <input type="text" id="start-date" placeholder="Start Date" />
          <input type="text" id="end-date" placeholder="End Date" />
          <textarea
            rows={4}
            cols={30}
            maxLength={300}
            id="description"
            placeholder="Description"
          />
          <div className="button-container">
            <button className="add">Add</button>
          </div>
        </div>
        <div className="education-container">
          <h2 className="education-title">Education</h2>
          <input type="text" id="university" placeholder="University" />
          <input type="text" id="major" placeholder="Major" />
          <input type="text" id="start-date" placeholder="Start Date" />
          <input type="text" id="end-date" placeholder="End Date" />
          <div className="button-container">
            <button className="add">Add</button>
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
