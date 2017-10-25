import { LOGIN_USER, SIGNUP_USER } from './actions';

const DEFAULT_STATE = {
  isLoggedIn: false,
  username: null,
  email: null,
  userId: null
}

function rootReducer(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case SIGNUP_USER:
      localStorage.setItem("userInfo", action.payload);
      return Object.assign({}, state, { ...action.payload });
    case LOGIN_USER:
      localStorage.setItem("userInfo", action.payload);
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}

export default rootReducer;
