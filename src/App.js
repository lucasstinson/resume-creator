import React, { Component } from "react";
import "./styles/app.css";
import Head from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: { name: "", phone: "", email: "", location: "", github: "" },
      jobs: [
        {
          company: "",
          position: "",
          positionStart: "",
          positionEnd: "",
          description: "",
        },
      ],
      schools: [
        {
          university: "",
          major: "",
          universityStart: "",
          UniversityEnd: "",
        },
      ],
    };

    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  handlePersonalChange = (e) => {
    const personalInfo = e.target.parentNode;
    this.setState({
      personal: {
        name: personalInfo.children[1].value,
        phone: personalInfo.children[2].value,
        email: personalInfo.children[3].value,
        location: personalInfo.children[4].value,
        github: personalInfo.children[5].value,
      },
    });
  };

  handleExperienceChange = (e) => {
    const workContainer = e.target.parentNode.parentNode;

    let allExperience = [];

    for (let i = 1; i < workContainer.childElementCount; i++) {
      const workExperience = workContainer.children[i];
      let job = {
        company: workExperience.children[0].value,
        position: workExperience.children[1].value,
        positionStart: workExperience.children[2].value,
        positionEnd: workExperience.children[3].value,
        description: workExperience.children[4].value,
      };
      allExperience.push(job);
    }
    this.setState({
      jobs: allExperience,
    });
  };

  handleEducationChange = (e) => {
    const educationContainer = e.target.parentNode.parentNode;

    let allEducation = [];

    for (let i = 1; i < educationContainer.childElementCount; i++) {
      const educationExperience = educationContainer.children[i];
      let school = {
        university: educationExperience.children[0].value,
        major: educationExperience.children[1].value,
        universityStart: educationExperience.children[2].value,
        UniversityEnd: educationExperience.children[3].value,
      };
      allEducation.push(school);
    }

    this.setState({
      schools: allEducation,
    });
  };

  addExperience = (e) => {
    e.preventDefault();
    let job = {
      company: "",
      position: "",
      positionStart: "",
      positionEnd: "",
      description: "",
    };
    this.setState({
      jobs: this.state.jobs.concat(job),
    });
  };

  addEducation = (e) => {
    e.preventDefault();
    let school = {
      university: "",
      major: "",
      universityStart: "",
      UniversityEnd: "",
    };
    this.setState({
      schools: this.state.schools.concat(school),
    });
  };

  deleteExperience = (e) => {
    e.preventDefault();
    const workExperience = e.target.parentNode.parentNode.dataset.count;
    this.setState({
      jobs: this.state.jobs.filter((value, index) => index != workExperience),
    });
  };

  deleteEducation = (e) => {
    e.preventDefault();
    const schoolExperience = e.target.parentNode.parentNode.dataset.count;
    this.setState({
      schools: this.state.schools.filter(
        (value, index) => index != schoolExperience
      ),
    });
  };

  render() {
    return (
      <div className="container">
        <Head />
        <div id="resume-container">
          <Form
            experienceCount={this.state.jobs.length}
            educationCount={this.state.schools.length}
            onPersonalChange={this.handlePersonalChange}
            onExperienceChange={this.handleExperienceChange}
            onEducationChange={this.handleEducationChange}
            onAddExp={this.addExperience}
            onAddEdu={this.addEducation}
            onDeleteExp={this.deleteExperience}
            onDeleteEdu={this.deleteEducation}
          />
          <Resume
            experienceCount={this.state.jobs.length}
            educationCount={this.state.schools.length}
            name={this.state.personal.name}
            email={this.state.personal.email}
            phone={this.state.personal.phone}
            location={this.state.personal.location}
            github={this.state.personal.github}
            jobs={this.state.jobs}
            schools={this.state.schools}
          />
        </div>
      </div>
    );
  }
}
export default App;
