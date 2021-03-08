import React, { Component } from 'react';
import { Joi } from 'joi-browser';
import Form from '../Forms/Form';

class ProblemSection extends Form{
  state={
    data:{problem: "", domain: ""},
    errors: {}
  };
  schema={
    problem: Joi.string()
    .required()
    .label("Type your Problem"),

    domain: Joi.string()
    .required()
    .label("Type your Programming Language")
  };
  
  render(){
    return(
      <div>
        <h1>Post Your Problem</h1>
        <form>
          {this.renderTextField("problem", "Type your Problem")}
          {this.renderInput("domain", "Type your Programming Language", "text")}
          <br/>
          {this.renderButton("POST")}

        </form>
      </div>
    );
  }

}
export default ProblemSection;