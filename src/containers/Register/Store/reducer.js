import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../../utils/constants';
import {
  GET_REGISTER_USER,
  GET_REGISTER_USER_SUCCESS,
  GET_REGISTER_USER_ERROR
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
export function RegisterStore(state = initialState, action) {
  console.log('sssssssss', action)
  switch (action.type) {
    case GET_REGISTER_USER:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_REGISTER_USER_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        user: action.data,
        error: null,
      };
    case GET_REGISTER_USER_ERROR:
      return { ...state, phase: ERROR, error: action.error };
    default:
      return {
        ...state,
        phase: INIT,
      };
  }
}
