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
      personal: { name: "", email: "", phone: "", location: "", github: "" },
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
    // this.onCreateResume = this.onCreateResume.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  handlePersonalChange = (e) => {
    const personalInfo = e.target.parentNode;
    this.setState({
      personal: {
        name: personalInfo.children[1].value,
        email: personalInfo.children[2].value,
        phone: personalInfo.children[3].value,
        location: personalInfo.children[4].value,
        github: personalInfo.children[5].value,
      },
    });
  };

  handleExperienceChange = (e) => {
    const workContainer = e.target.parentNode.parentNode;

    let allExperience = [];

    for (let i = 1; i < workContainer.childElementCount - 1; i++) {
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

    for (let i = 1; i < educationContainer.childElementCount - 1; i++) {
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

  // onCreateResume = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     name: this.state.form.name,
  //     email: this.state.form.email,
  //     phone: this.state.form.phone,
  //     location: this.state.form.location,
  //     github: this.state.form.github,
  //     company: this.state.form.work.job0.company + ",",
  //     position: this.state.form.work.job0.position,
  //     positionStart: this.state.form.work.job0.positionStart + " |",
  //     positionEnd: this.state.form.work.job0.positionEnd,
  //     description: this.state.form.work.job0.description,
  //     university: this.state.form.school.school0.university + ",",
  //     major: this.state.form.school.school0.major,
  //     universityStart: this.state.form.school.school0.universityStart + " |",
  //     UniversityEnd: this.state.form.school.school0.UniversityEnd,
  //   });
  // };

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

  render() {
    return (
      <div className="container">
        <Head />
        <div id="resume-container">
          <Form
            experienceCount={this.state.jobs.length}
            educationCount={this.state.schools.length}
            // handleSubmit={this.onCreateResume}
            onPersonalChange={this.handlePersonalChange}
            onExperienceChange={this.handleExperienceChange}
            onEducationChange={this.handleEducationChange}
            onClickExp={this.addExperience}
            onClickEdu={this.addEducation}
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
