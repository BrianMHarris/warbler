import { LOGIN_USER, SIGNUP_USER } from './actions';

const DEFAULT_STATE = {
  isLoggedIn: false
}

function rootReducer(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case SIGNUP_USER:
      return { isLoggedIn: true };
    case LOGIN_USER:
      return { isLoggedIn: true };
    default:
      return state;
  }
}

export default rootReducer;
