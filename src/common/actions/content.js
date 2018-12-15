import contentApi from '../api/content';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_CONTENT_UPDATE_RESULT = 'RECEIVE_CONTENT_UPDATE_RESULT';
export const FETCH_EVENTS = 'FETCH_EVENTS ';
export const RECEIVE_EVENTS  = 'RECEIVE_EVENTS ';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const FETCH_POLLS = 'FETCH_POLLS';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';

export function fetchArticles (args) {
  return dispatch =>
    contentApi.fetchArticles(
      results => dispatch(receiveArticles(results)),
      args
    )
}

export function postArticle (cb, article) {
  return dispatch =>
    contentApi.updateOrCreateArticle(result => {
      dispatch(receiveContentUpdateResult(result))
      cb(result)
    }, { article })
    // ##TODO## :: Use Redux for cb equivalent
    // contentApi.updateOrCreateArticle(result => {
    //   dispatch(receiveContentUpdateResult(result))
    // }, { article })
}

export function receiveArticles ( results ) {
  return { type: RECEIVE_ARTICLES, payload: results }
}

export function receiveContentUpdateResult (result) {
  return { type: RECEIVE_CONTENT_UPDATE_RESULT, payload: result}
}


export function fetchEvents (args) {
  return dispatch =>
    contentApi.fetchEvents(
      results => dispatch(receiveEvents(results)),
      args
    )
}

export function receiveEvents ( results ) {
  return { type: RECEIVE_EVENTS, payload: results }
}


export function fetchPhotos (args) {
  return dispatch =>
    contentApi.fetchPhotos(
      results => dispatch(receivePhotos(results)),
      args
    )
}

export function receivePhotos ( results ) {
  return { type: RECEIVE_PHOTOS, payload: results }
}


export function fetchPolls (args) {
  return dispatch =>
    contentApi.fetchPolls(
      results => dispatch(receivePolls(results)),
      args
    )
}

export function receivePolls ( results ) {
  return { type: RECEIVE_POLLS, payload: results }
}
