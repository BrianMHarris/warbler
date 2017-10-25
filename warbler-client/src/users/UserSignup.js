import React, { Component } from 'react';
import './UserLogin.css';
import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import { signupUser } from '../actions'

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let userInfo = {
      username: event.target.form[0].value,
      email: event.target.form[1].value,
      password: event.target.form[2].value
    };

    fetch("http://localhost:3333/api/users", {method: 'POST', body: userInfo})
      .then(function(res) {
        console.log(res);
        // return res.json();
        this.props.dispatch(signupUser(event.target.form[0].value,
                          event.target.form[1].value,
                          event.target.form[2].value));
      })
      .catch(function(err) {
        console.log(err);
      });





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

export default connect()(UserSignup);
