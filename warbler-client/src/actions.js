export const LOGIN_USER = 'LOGIN_USER';
export const SIGNUP_USER = 'SIGNUP_USER';

export function signupUser(username, email, userId) {
  return {
    type: SIGNUP_USER,
    payload: {
      isLoggedIn: true,
      username: username,
      email: email,
      userId: userId
    }
  }
}

// These do basically the same thing, can we use a generic LOGIN?
export function loginUser(username, email, userId) {
  return {
    type: LOGIN_USER,
    payload: {
      isLoggedIn: true,
      username: username,
      email: email,
      userId: userId
    }
  }
}
