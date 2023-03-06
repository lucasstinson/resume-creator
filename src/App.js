import React, { Component } from "react";
import "./styles/app.css";
import Head from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onCreateResume = this.onCreateResume.bind(this);
  }

  handleChange = {};
  onCreateResume = (e) => {
    e.preventDefault();
    alert("hi");
  };

  render() {
    return (
      <div className="container">
        <Head />
        <div id="resume-container">
          <Form handleSubmit={this.onCreateResume} />
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
