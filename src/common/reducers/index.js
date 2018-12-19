import { combineReducers } from 'redux';

import auth from './auth';
import content from './content';
import elections from './elections';
import staff from './staff';

const rootReducer = combineReducers({
  auth,
  content,
  elections,
  staff,
});

export default rootReducer;
