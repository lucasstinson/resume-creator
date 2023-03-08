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
      experienceCount: 1,
      educationCount: 1,
      form: {
        nameForm: "",
        emailForm: "",
        phoneForm: "",
        locationForm: "",
        githubForm: "",
        work: {
          job0: {
            companyForm: "",
            positionForm: "",
            positionStartForm: "",
            positionEndForm: "",
            descriptionForm: "",
          },
        },
        school: {
          school0: {
            universityForm: "",
            majorForm: "",
            universityStartForm: "",
            UniversityEndForm: "",
          },
        },
      },
      name: "",
      email: "",
      phone: "",
      location: "",
      github: "",
      work: {
        job0: { company: "", position: "", positionStart: "", positionEnd: "" },
        job1: { company: "", position: "", positionStart: "", positionEnd: "" },
        job2: { company: "", position: "", positionStart: "", positionEnd: "" },
        job3: { company: "", position: "", positionStart: "", positionEnd: "" },
      },
      school: {
        school0: {
          description: "",
          university: "",
          major: "",
          universityStart: "",
          UniversityEnd: "",
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onCreateResume = this.onCreateResume.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
  }

  handleChange = (e) => {
    if (e.target.parentNode.className == "work-experience") {
      const workExperience = e.target.parentNode;
      let jobNum = "job" + workExperience.dataset.count;
      console.log(e.target.parentNode.className);
      this.setState({
        form: {
          nameForm: document.getElementById("name").value,
          emailForm: document.getElementById("email").value,
          phoneForm: document.getElementById("phone").value,
          locationForm: document.getElementById("location").value,
          githubForm: document.getElementById("github").value,
          work: {
            jobNum: {
              companyForm: document.getElementById("company").value,
              positionForm: document.getElementById("position").value,
              positionStartForm:
                document.getElementById("job-start-date").value,
              positionEndForm: document.getElementById("job-end-date").value,
              descriptionForm: document.getElementById("description").value,
            },
          },
        },
      });
    }
  };

  onCreateResume = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.form.nameForm,
      email: this.state.form.emailForm,
      phone: this.state.form.phoneForm,
      location: this.state.form.locationForm,
      github: this.state.form.githubForm,
      company: this.state.form.work.job0.companyForm + ",",
      position: this.state.form.work.job0positionForm,
      positionStart: this.state.form.work.job0.positionStartForm + " |",
      positionEnd: this.state.form.work.job0.positionEndForm,
      description: this.state.form.work.job0.descriptionForm,
      university: this.state.form.school.school0.universityForm + ",",
      major: this.state.form.school.school0.majorForm,
      universityStart:
        this.state.form.school.school0.universityStartForm + " |",
      UniversityEnd: this.state.form.school.school0.UniversityEndForm,
    });
  };

  addExperience = (e) => {
    e.preventDefault();
    this.setState({ experienceCount: this.state.experienceCount + 1 });
  };

  addEducation = (e) => {
    e.preventDefault();
    this.setState({ educationCount: this.state.educationCount + 1 });
  };

  render() {
    return (
      <div className="container">
        <Head />
        <div id="resume-container">
          <Form
            addExperience={this.state.experienceCount}
            addEducation={this.state.educationCount}
            handleSubmit={this.onCreateResume}
            onChange={this.handleChange}
            onClickExp={this.addExperience}
            onClickEdu={this.addEducation}
          />
          <Resume
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
            location={this.state.location}
            github={this.state.github}
            company={this.state.company}
            position={this.state.position}
            positionStart={this.state.positionStart}
            positionEnd={this.state.positionEnd}
            description={this.state.description}
            university={this.state.university}
            major={this.state.major}
            universityStart={this.state.universityStart}
            UniversityEnd={this.state.UniversityEnd}
          />
        </div>
      </div>
    );
  }
}
export default App;
