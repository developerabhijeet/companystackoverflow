import React from 'react';
export const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group">
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} className="form-control" />

      </div>
      {errors && <div className="alert alert-danger">
        {errors}
      </div>}
    </div>
  );
}

export const TextField = ({ name, label, problem, domain,errors, ...rest }) => {
  return (
    <div className="form-group">
      <div className="form-group">
      <label htmlFor={problem}>{label}</label>
        
      <textfield {...rest} name={problem} id={problem} className="form-control">
      </textfield>
      {errors && <div className="alert alert-danger">
        {errors}
    </div>}
    </div>
    </div>


  );
}