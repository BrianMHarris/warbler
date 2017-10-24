export const LOGIN_USER = 'LOGIN_USER';
var fetch = require('node-fetch');

export function loginUser() {
  fetch()

  return {
    type: LOGIN_USER,
    payload: true
  }
}
