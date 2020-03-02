import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../../utils/constants';
import {
GET_NORMAL_REQUEST, GET_NORMAL_REQUEST_SUCCESS, GET_NORMAL_REQUEST_ERROR,
ADD_NORMAL_REQUEST, ADD_NORMAL_REQUEST_SUCCESS, ADD_NORMAL_REQUEST_ERROR
} from './constant';


const initialState = {
  phase: INIT,
  normalRequest: null,
  addNormalRequest: null,
  error: null,
};

/**
 * User Reducer
 * @param {Object} state
 * @param {Object} action
 */
export function NormalRequestStore(state = initialState, action) {
  switch (action.type) {
    case GET_NORMAL_REQUEST:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_NORMAL_REQUEST_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        normalRequest: action.data,
        error: null,
      };
    case GET_NORMAL_REQUEST_ERROR:
      return { ...state, phase: ERROR, error: action.error };
      case GET_NORMAL_REQUEST:
      return {
        ...state,
        phase: LOADING,
      };
    case ADD_NORMAL_REQUEST:
        return {
          ...state,
          phase: LOADING,
        };
    case ADD_NORMAL_REQUEST_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        addNormalRequest: action.data,
        error: null,
      };
    case ADD_NORMAL_REQUEST_ERROR:
      return { ...state, phase: ERROR, error: action.error };

    default:
      return state;
  }
}
