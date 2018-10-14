import * as ContentActions from '../actions/content';

const content = (state = {
  articles: [],
  events: [],
  photos: []
}, action) => {
  // const { articles, events, photos } = state;

  switch (action.type) {
    case ContentActions.RECEIVE_ARTICLES:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        articles: action.payload
      }

    default:
      return state;
  }
}

export default content;
