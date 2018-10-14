import { combineReducers } from 'redux';
import auth from './auth';
import staff from './staff';

const rootReducer = combineReducers({
  auth,
  staff,
});

export default rootReducer;
