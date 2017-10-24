import { LOGIN_USER } from './actions';

const DEFAULT_STATE = {
  isLoggedIn: false
}

function rootReducer(state=DEFAULT_STATE, action) {
  switch(action.type) {
    case LOGIN_USER:
      return { isLoggedIn: true };

    default:
      return state;
  }
}

export default rootReducer;
