import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "../Forms/Form";
import '../download.jpeg';
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "", useremail: "", jobprofile: "" },
    errors: {}
  };
  schema = {
    username: Joi.string()
      .required()
      .min(5)
      .label("Username"),

    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    name: Joi.string()
      .required()
      .min(3)
      .label("Name"),

    useremail: Joi.string()
      .required()
      .email()
      .label("Email"),

    jobprofile: Joi.string()
      .required()
      .min(2)
      .label("Profile")

  };
  doSubmit = () => {
    console.log("Submit");
  };
  render() {
    return (
      <div>
        <div>
          <h1>Register Form</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name", "text")}
            {this.renderInput("username", "Username", "text")}
            {this.renderInput("useremail", "Email", "text")}
            {this.renderInput("jobprofile", "Job Profile", "text")}
            {this.renderInput("password", "Password", "password")}
            <br />
            {this.renderButton("SignUp")}
          </form>
        </div>
        <div>
          <img src="download"/>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
