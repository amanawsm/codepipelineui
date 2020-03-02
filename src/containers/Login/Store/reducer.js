import {
  INIT, SUCCESS, LOADING, ERROR, UNAUTH_USER
} from '../../../utils/constants';
import {
  GET_AUTH_USER,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_ERROR,
} from './constant';


const initialState = {
  phase: INIT,
  user: null,
  error: null,
};

/**
 * User Reducer
 * @param {Object} state
 * @param {Object} action
 */
export function LoginStore(state = initialState, action) {
  switch (action.type) {
    case GET_AUTH_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_AUTH_USER_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        user: action.data,
        error: null,
      };
    case GET_AUTH_USER_ERROR:
      return { ...state, phase: ERROR, error: action.error };
    
      case UNAUTH_USER: return {
        ...state,
        phase: SUCCESS,
        user: null,
        error: null,
      };

    default:
      return {
        ...state,
        phase: INIT,
      };
  }
}
