import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserLogin.css';
import LoginForm from './LoginForm'
import { signupUser } from '../actions'

class UserSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    debugger
    event.preventDefault();
    let userInfo = {
      username: event.target.form[0].value,
      email: event.target.form[1].value,
      password: event.target.form[2].value
    };

    var that = this;
    fetch("http://localhost:3333/api/users", {method: 'POST', body: userInfo})
      .then(function(res) {
        if (res.ok === false)
          throw res;

        that.props.dispatch(signupUser(userInfo.username,
                          userInfo.email,
                          userInfo.password));
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return(
      <div className="row something">
        <div className="login-form-body col-4 offset-4">
          <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default connect()(UserSignup);
