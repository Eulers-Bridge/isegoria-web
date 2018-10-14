import contentApi from '../api/content';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

export function fetchArticles () {
  return dispatch =>
    contentApi.fetchArticles(results =>
      dispatch(receiveArticles(results))
    )
}

export function receiveArticles ( results ) {
  return { type: RECEIVE_ARTICLES, payload: results }
}
