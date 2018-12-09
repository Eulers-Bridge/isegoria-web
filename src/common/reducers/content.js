import * as ContentActions from '../actions/content';

// ##TODO## :: Map items so we can `content.${type}.${id}`
const content = (state = {
  article: [],
  event: [],
  photo: [],
  poll: []
}, action) => {
  switch (action.type) {
    case ContentActions.RECEIVE_ARTICLES:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        article: action.payload
      }

    case ContentActions.RECEIVE_EVENTS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        event: action.payload
      }

    case ContentActions.RECEIVE_PHOTOS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        photo: action.payload
      }

    case ContentActions.RECEIVE_POLLS:
      return {
        ...state,
        // ##TODO## :: { id: data } and merge
        poll: action.payload
      }

    default:
      return state;
  }
}

export default content;
