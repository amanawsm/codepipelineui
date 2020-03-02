
import {
  GET_NORMAL_REQUEST, 
  ADD_NORMAL_REQUEST
} from './constant';

/**
 * Get Dashbord info
 */
export const getNormalRequestInfo = (params) => ({
  type: GET_NORMAL_REQUEST, params
});
export const addNormalRequestInfo = (param) => ({
  type: ADD_NORMAL_REQUEST, param
});