import authApi from '../api/auth';

export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export function attemptLogin (email, password) {
  return dispatch =>
    authApi.attemptLogin(results =>
      Promise.all([
        dispatch(loginSuccess(results))
      ]), { email, password })
}

export function loginSuccess (results) {
  return { type: LOGIN_SUCCESS, payload: results }
}
