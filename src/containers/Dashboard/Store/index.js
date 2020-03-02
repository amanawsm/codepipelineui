
import {
  GET_ENVIRONMENT_INFO,
  GET_PROGRAME_DETAIL_INFO,
  GET_PROGRAME_TYPE_DETAIL_INFO,
  GET_APP_LIST_INFO,
  GET_APP_PROGRAM_LIST_INFO
} from './constant';

/**
 * Get Dashbord info
 */
export const getEnvironemntInfo = () => ({
  type: GET_ENVIRONMENT_INFO,
});

/**
 * Get Dashbord programe detail
 */
export const getDashboradProgramData = (param) => ({
  type: GET_PROGRAME_DETAIL_INFO, param
});

/**
 * Get Dashbord programe tpye detail
 */
export const getSelectTabProgramData = (param) => ({
  type: GET_PROGRAME_TYPE_DETAIL_INFO, param
});

/**
 * Get Dashbord programe tpye detail
 */
export const getappdata = (param) => ({
  type: GET_APP_LIST_INFO, param
});

/**
 * Get Dashbord programe tpye detail
 */
export const getAppProgram = (param) => ({
  type: GET_APP_PROGRAM_LIST_INFO, param
});


