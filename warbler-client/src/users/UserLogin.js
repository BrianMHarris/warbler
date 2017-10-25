import React, { Component } from 'react';
import './UserLogin.css';
import { connect } from 'react-redux';
import LoginForm from './LoginForm'
import { loginUser } from '../actions'

class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
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
    event.preventDefault();
    let userInfo = {
      username: this.state.username,
      password: this.state.password
    };

    var that = this;
    fetch("http://localhost:3333/api/users/login", {method: 'POST', body: userInfo})
      .then(function(res) {
        if (res.ok === false)
          throw res;

        that.props.dispatch(loginUser(userInfo.username,
                          "email", // ***NEED TO GET EMAIL FROM SERVER.
                          "ID")); // ***NEED TO GET THE USER ID FROM SERVER.

      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return(
      <div className="row something">
        <div className="login-form-body col-4 offset-4">
          <LoginForm handleSubmit={this.handleSubmit}
                      handleChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default connect()(UserLogin);
