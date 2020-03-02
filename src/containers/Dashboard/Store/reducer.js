import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../../utils/constants';
import {
  GET_ENVIRONMENT_INFO, GET_ENVIRONMENT_INFO_SUCCESS, GET_ENVIRONMENT_INFO_ERROR,
  GET_PROGRAME_DETAIL_INFO, GET_PROGRAME_DETAIL_INFO_SUCCESS, GET_PROGRAME_DETAIL_INFO_ERROR,
  GET_PROGRAME_TYPE_DETAIL_INFO, GET_PROGRAME_TYPE_DETAIL_INFO_SUCCESS, GET_PROGRAME_TYPE_DETAIL_INFO_ERROR,
  GET_APP_LIST_INFO, GET_APP_LIST_INFO_SUCCESS, GET_APP_LIST_INFO_ERROR,
  GET_APP_PROGRAM_LIST_INFO, GET_APP_PROGRAM_LIST_INFO_SUCCESS, GET_APP_PROGRAM_LIST_INFO_ERROR

} from './constant';


const initialState = {
  phase: INIT,
  dashboradInfo: null,
  programDetail: null,
  dashboradTabInfo: null,
  appProgramList: null,
  appList: null,
  error: null,
};

/**
 * User Reducer
 * @param {Object} state
 * @param {Object} action
 */
export function DashboardStore(state = initialState, action) {
  switch (action.type) {
    case GET_ENVIRONMENT_INFO:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_ENVIRONMENT_INFO_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        dashboradInfo: action.data,
        error: null,
      };
    case GET_ENVIRONMENT_INFO_ERROR:
      return { ...state, phase: ERROR, error: action.error };

    case GET_PROGRAME_DETAIL_INFO:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_PROGRAME_DETAIL_INFO_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        programDetail: action.data,
        error: null,
      };
    case GET_PROGRAME_DETAIL_INFO_ERROR:
      return { ...state, phase: ERROR, error: action.error };

    case GET_PROGRAME_TYPE_DETAIL_INFO:
      return {
        ...state,
        phase: LOADING,
        dashboradTabInfo: null,
      };
    case GET_PROGRAME_TYPE_DETAIL_INFO_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        dashboradTabInfo: action.data,
        error: null,
      };
    case GET_PROGRAME_TYPE_DETAIL_INFO_ERROR:
      return { ...state, phase: ERROR, error: action.error };


    case GET_APP_LIST_INFO:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_APP_LIST_INFO_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        appList: action.data,
        error: null,
      };
    case GET_APP_LIST_INFO_ERROR:
      return { ...state, phase: ERROR, error: action.error };


    case GET_APP_PROGRAM_LIST_INFO:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_APP_PROGRAM_LIST_INFO_SUCCESS:
      return {
        ...state,
        phase: SUCCESS,
        appProgramList: action.data,
        error: null,
      };
    case GET_APP_PROGRAM_LIST_INFO_ERROR:
      return { ...state, phase: ERROR, error: action.error };




    default:
      return state;
  }
}
