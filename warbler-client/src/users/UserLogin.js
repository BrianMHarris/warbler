import React, { Component } from 'react';
import './UserLogin.css';
import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import { loginUser } from '../actions'

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(loginUser());
  }

  render() {
    return(
      <div className="row something">
        <div className="login-form-body col-4 offset-4">
          <LoginForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default connect()(UserLogin);
