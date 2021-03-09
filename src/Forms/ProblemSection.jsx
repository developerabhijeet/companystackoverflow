import React, { Component } from 'react';
import { Joi } from 'joi-browser';
import Form from '../Forms/Form';

class ProblemSection extends Form{
  constructor(){
    super();
  const state={
    data1:{problem: "", domain: ""},
    errors: {}
  };
  const schema={

  }
};
 
  render(){
    return(
      <div>
        <h1>Post Your Problem</h1>
        <form>
          {this.renderInput("problem", "Type your Problem")}
          <br/>
          {this.renderInput("domain", "Type your Programming Language", "text")}
          <br/>
          {this.renderButtonP("POST")}

        </form>
      </div>
    );
  }

}
export default ProblemSection;