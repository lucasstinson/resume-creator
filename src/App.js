import React, { useState } from "react";
import "./styles/app.css";
import Head from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";

const App = () => {
  const [personal, setPersonal] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    github: "",
  });

  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      positionStart: "",
      positionEnd: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      university: "",
      major: "",
      universityStart: "",
      UniversityEnd: "",
    },
  ]);

  const handlePersonalChange = (e) => {
    const personalInfo = e.target.parentNode;
    setPersonal({
      name: personalInfo.children[1].value,
      phone: personalInfo.children[2].value,
      email: personalInfo.children[3].value,
      location: personalInfo.children[4].value,
      github: personalInfo.children[5].value,
    });
  };

  const handleExperienceChange = (e) => {
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
      allExperience = [...allExperience, job];
    }
    setExperience(allExperience);
  };

  const handleEducationChange = (e) => {
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
      allEducation = [...allEducation, school];
    }

    setEducation(allEducation);
  };

  const addExperience = (e) => {
    e.preventDefault();
    let jobs = experience;
    let job = {
      company: "",
      position: "",
      positionStart: "",
      positionEnd: "",
      description: "",
    };
    setExperience([...jobs, job]);
  };

  const addEducation = (e) => {
    e.preventDefault();
    let schools = education;
    let school = {
      university: "",
      major: "",
      universityStart: "",
      UniversityEnd: "",
    };
    setEducation([...schools, school]);
  };

  const deleteExperience = (e) => {
    e.preventDefault();
    const workExperience = e.target.parentNode.parentNode.dataset.count;
    setExperience(experience.filter((value, index) => index != workExperience));
  };

  const deleteEducation = (e) => {
    e.preventDefault();
    const schoolExperience = e.target.parentNode.parentNode.dataset.count;
    setEducation(education.filter((value, index) => index != schoolExperience));
  };

  return (
    <div className="container">
      <Head />
      <div id="resume-container">
        <Form
          onPersonalChange={handlePersonalChange}
          onExperienceChange={handleExperienceChange}
          onEducationChange={handleEducationChange}
          onAddExp={addExperience}
          onAddEdu={addEducation}
          experience={experience}
          education={education}
          onDeleteExp={deleteExperience}
          onDeleteEdu={deleteEducation}
        />
        <Resume
          personal={personal}
          experience={experience}
          education={education}
        />
      </div>
    </div>
  );
};

export default App;
