import { RECEIVE_TRUCKS } from '../actions/truck_actions';
import merge from 'lodash/merge';

const TruckReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRUCKS:
      return merge({}, action.trucks);
    default:
      return state;
  }
};

export default TruckReducer;
