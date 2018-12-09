import authApi from '../api/auth';
import { fetchArticles, fetchEvents, fetchPhotos, fetchPolls } from './content';
import { push } from 'connected-react-router';

export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS';
export const SET_REDIRECT_URL = 'SET_REDIRECT_URL';


export function attemptLogin (email, password) {
  return dispatch => Promise.all([
    // ##TODON'T##
    dispatch(receiveUser({ email, password })),

    authApi.attemptLogin(results => {
      const { user, userId } = results
      const { institutionId } = user

      // ##TODON'T##
      const fetchArgs = { email, institutionId, password, userId }

      return Promise.all([
        console.log(results),
        dispatch(loginSuccess(results)),
        // ##TODO## :: think about moving
        // dispatch(receiveArticles(results.articles)),
        dispatch(receiveUser(results.user)),
        dispatch(fetchArticles(fetchArgs)),
        dispatch(fetchEvents(fetchArgs)),
        dispatch(fetchPhotos(fetchArgs)),
        dispatch(fetchPolls(fetchArgs))
      ])
    }, { email, password })
  ])
}

export function attemptLogout () {
  return dispatch => Promise.all([
    dispatch(logout()),
    dispatch(push('/'))
  ])
}

export function loginSuccess (results) {
  return { type: LOGIN_SUCCESS, payload: results }
}

export function logout () {
  return { type: LOGOUT }
}

export function receiveUser (details) {
  return { type: RECEIVE_USER_DETAILS, payload: details }
}

export function setRedirectUrl (url) {
  return { type: SET_REDIRECT_URL, payload: url }
}
