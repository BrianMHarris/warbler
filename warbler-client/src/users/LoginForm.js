import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  renderEmail() {
    return(
      <div className="form-group">
        <label htmlFor="emailaddress">Email:</label>
        <input onChange={this.props.handleChange} type="email" className="form-control" id="email"/>
        <small id="emailHelp" className="form-text text-muted">We'll definitely share your email with everyone else.</small>
      </div>
    );
  }

  render() {
    var showEmail = null;
    if (this.props.showEmail)
      showEmail = this.renderEmail();
    return(
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input onChange={this.props.handleChange} type="text" className="form-control" id="username"/>
        </div>
        {showEmail}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input onChange={this.props.handleChange} type="password" className="form-control" id="password"/>
        </div>
        <button type="submit"
                className="btn btn-primary"
                onClick={this.props.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
