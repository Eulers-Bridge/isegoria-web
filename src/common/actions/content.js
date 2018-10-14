import contentApi from '../api/content';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const FETCH_EVENTS = 'FETCH_EVENTS ';
export const RECEIVE_EVENTS  = 'RECEIVE_EVENTS ';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export function fetchArticles (args) {
  return dispatch =>
    contentApi.fetchArticles(
      results => dispatch(receiveArticles(results)),
      args
    )
}

export function receiveArticles ( results ) {
  return { type: RECEIVE_ARTICLES, payload: results }
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
