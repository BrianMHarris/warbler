import { LOGIN_USER, SIGNUP_USER } from './actions';

const DEFAULT_STATE = {
  isLoggedIn: false,
  userId: null
}

function rootReducer(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case SIGNUP_USER:
      debugger;
      return Object.assign({}, state, { ...action.payload });
    case LOGIN_USER:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}

export default rootReducer;
