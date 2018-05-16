import {combineReducers} from 'redux';
import TruckReducer from './truck_reducer';
import ErrorReducer from './error_reducer';

const rootReducer = combineReducers({
  trucks: TruckReducer,
  errors: ErrorReducer
});

export default rootReducer;
