export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

var fetch = require('node-fetch');

export function signupUser(username, email) {


  return {
    type: SIGNUP_USER,
    payload: {
      username: username,
      email: email
    }
  }
}

export function loginUser() {
  return {
    type: LOGIN_USER,
    payload: true
  }
}
