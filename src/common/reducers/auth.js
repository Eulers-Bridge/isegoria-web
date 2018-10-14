import * as AuthActions from '../actions/auth';

const auth = (state = {
  email: '',
  loggedIn: false,
  password: '',
}, action) => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

export default auth;
