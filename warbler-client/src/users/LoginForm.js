import React, { Component } from 'react';
import './LoginForm.css';
import { connect } from 'react-redux';

const LoginForm = (props) => {
  return(
    <form>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" className="form-control" id="username"/>
      </div>
      <div className="form-group">
        <label htmlFor="emailaddress">Email:</label>
        <input type="email" className="form-control" id="emailaddress"/>
        <small id="emailHelp" className="form-text text-muted">We'll definitely share your email with everyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" id="password"/>
      </div>
      <button type="submit"
              className="btn btn-primary"
              onClick={props.handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
