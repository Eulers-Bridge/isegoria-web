import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import content from './content';
import elections from './elections';
import staff from './staff';

export default (history) => combineReducers({
  auth,
  content,
  elections,
  router: connectRouter(history),
  staff,
});
