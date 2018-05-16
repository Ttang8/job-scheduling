import * as APIUtil from '../util/truck_api_util';

export const RECEIVE_TRUCKS = "RECEIVE_TRUCKS";
export const RECEIVE_TRUCK = "RECEIVE_TRUCK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveTruck = truck => ({
  type: RECEIVE_TRUCK,
  truck
});

export const receiveTrucks = trucks => ({
  type: RECEIVE_TRUCKS,
  trucks
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const requestTrucks = () => (dispatch) => (
  APIUtil.requestTrucks().then(trucks => dispatch(receiveTrucks(trucks)))
);

export const createTruck = truck => dispatch => (
  APIUtil.createTruck(truck).then(truck => (
    dispatch(receiveTruck(truck))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
