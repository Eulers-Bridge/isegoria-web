import * as AuthActions from '../actions/auth';

const auth = (state = {
  email: '',
  loggedIn: false,
  password: '',
  user: {}
}, action) => {
  const { email, loggedIn, password, user } = state

  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };

    case AuthActions.RECEIVE_USER_DETAILS:
      return {
        ...state,

        // ##TODON'T##
        email: action.payload.email
          ? action.payload.email
          : email,
        password: action.payload.password
          ? action.payload.password
          : password,

        user: Object.assign({},
          user,
          action.payload
        )
      }

    default:
      return state;
  }
}

export default auth;
