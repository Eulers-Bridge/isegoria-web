import * as AuthActions from '../actions/auth';

const INITIAL_AUTH_STATE = {
  email: '',
  loggedIn: false,
  password: '',
  redirectUrl: '/',
  user: {}
}

const auth = (state = INITIAL_AUTH_STATE, action) => {
  const { email, password, user } = state

  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      };

    case AuthActions.LOGOUT:
      return INITIAL_AUTH_STATE;

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
      };

    case AuthActions.SET_REDIRECT_URL:
      return {
        ...state,
        redirectUrl: action.payload
      };

    default:
      return state;
  }
}

export default auth;
