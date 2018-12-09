import * as ContentActions from '../actions/content';

const content = (state = {
  articles: [],
  events: [],
  photos: [],
  polls: []
}, action) => {
  // const { articles, events, photos } = state;

  switch (action.type) {
    case ContentActions.RECEIVE_ARTICLES:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        articles: action.payload
      }

    case ContentActions.RECEIVE_EVENTS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        events: action.payload
      }

    case ContentActions.RECEIVE_PHOTOS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        photos: action.payload
      }

    case ContentActions.RECEIVE_POLLS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        polls: action.payload
      }

    default:
      return state;
  }
}

export default content;
