import * as APIUtil from '../util/truck_api_util';
import {receiveErrors, receiveTruck } from './truck_actions';

export const createJob = job => dispatch => (
  APIUtil.createJob(job).then((job) => (
    dispatch(receiveTruck(job.truck))
  ),errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
