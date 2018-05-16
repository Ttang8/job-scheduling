import { RECEIVE_TRUCK,
  RECEIVE_TRUCKS,
  RECEIVE_ERRORS } from '../actions/truck_actions';
import merge from 'lodash/merge';

const TruckReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRUCKS:
      return merge({}, action.trucks);
    case RECEIVE_TRUCK:
      return merge({}, state, {[action.truck.id]: action.truck});
    default:
      return state;
  }
};

export default TruckReducer;
