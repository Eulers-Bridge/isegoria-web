import { RECEIVE_STAFF } from '../actions/staff';

const staff = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STAFF:
      return action.payload;
    
    default:
      return state;
  }
}

export default staff;
