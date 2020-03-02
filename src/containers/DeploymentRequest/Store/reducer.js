import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../../utils/constants';
import {
  GET_DEPLOYMENT_REQUEST, GET_DEPLOYMENT_REQUEST_SUCCESS, GET_DEPLOYMENT_REQUEST_ERROR,
  ADD_DEPLOYMENT_REQUEST, UPDATE_DEPLOYMENT_REQUEST, UPDATE_DEPLOYMENT_REQUEST_SUCCESS, UPDATE_DEPLOYMENT_REQUEST_ERROR


} from './constant';


const initialState = {
  phase: INIT,
  deploymentRequest: null,
  updateDeploymentRequest: null,
  error: null
};

/**
 * User Reducer
 * @param {Object} state
 * @param {Object} action
 */
export function DeploymentRequestStore(state = initialState, action) {
  switch (action.type) {
    case GET_DEPLOYMENT_REQUEST:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_DEPLOYMENT_REQUEST_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        deploymentRequest: action.data,
        error: null,
      };
    case GET_DEPLOYMENT_REQUEST_ERROR:
      return { ...state, phase: ERROR, error: action.error };

    case UPDATE_DEPLOYMENT_REQUEST:
      return {
        ...state,
        phase: LOADING,
      };
    case UPDATE_DEPLOYMENT_REQUEST_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        updateDeploymentRequest: action.data,
        error: null,
      };
    case UPDATE_DEPLOYMENT_REQUEST_ERROR:
      return { ...state, phase: ERROR, error: action.error };

    default:
      return state;
  }
}
