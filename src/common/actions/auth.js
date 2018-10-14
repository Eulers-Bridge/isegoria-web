import authApi from '../api/auth';
import { receiveArticles } from './content';

export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';


export function attemptLogin (email, password) {
  return dispatch => Promise.all([
    // ##TODON'T##
    dispatch(receiveUser({ email, password })),

    authApi.attemptLogin(results =>
      Promise.all([
        dispatch(loginSuccess(results)),
        // ##TODO## :: think about moving
        dispatch(receiveArticles(results.articles)),
        dispatch(receiveUser(results.user))
      ]), { email, password })
  ])
}

export function loginSuccess (results) {
  return { type: LOGIN_SUCCESS, payload: results }
}

export function receiveUser (details) {
  return { type: RECEIVE_USER_DETAILS, payload: details }
}
