import React, { Component } from 'react';
import './LoginModal.css';
import { connect } from 'react-redux';
import { loginUser } from './actions'

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(loginUser());
  }

  render() {
    return(
      <div className="row something">
        <div className="login-form-body col-4 offset-4">
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
                    onClick={this.handleLogin}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = function(dispatch) {
//   return {

//   }
// }

export default connect()(LoginModal);
