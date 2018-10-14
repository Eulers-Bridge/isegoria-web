import { combineReducers } from 'redux';

import auth from './auth';
import content from './content';
import staff from './staff';

const rootReducer = combineReducers({
  auth,
  content,
  staff,
});

export default rootReducer;
