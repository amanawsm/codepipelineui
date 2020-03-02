
import {
  GET_DEPLOYMENT_REQUEST,
  UPDATE_DEPLOYMENT_REQUEST,
} from './constant';

/**
 * Get Dashbord info
 */
export const getDeploymentRequestInfo = (params) => ({
  type: GET_DEPLOYMENT_REQUEST, params
});
export const addDploymentRequestInfo = (param) => ({
  type: GET_DEPLOYMENT_REQUEST, param
});

export const updateDploymentRequestStatus = (param) => ({
  type: UPDATE_DEPLOYMENT_REQUEST, param
})