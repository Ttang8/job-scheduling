import * as APIUtil from '../util/truck_api_util';

export const RECEIVE_TRUCKS = "RECEIVE_TRUCKS";

export const receiveTrucks = trucks => ({
  type: RECEIVE_TRUCKS,
  trucks
});

export const requestTrucks = () => (dispatch) => (
  APIUtil.requestTrucks().then(trucks => dispatch(receiveTrucks(trucks)))
);
