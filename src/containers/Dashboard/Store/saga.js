import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_ENVIRONMENT_INFO, GET_ENVIRONMENT_INFO_SUCCESS, GET_ENVIRONMENT_INFO_ERROR,
  GET_PROGRAME_DETAIL_INFO, GET_PROGRAME_DETAIL_INFO_SUCCESS, GET_PROGRAME_DETAIL_INFO_ERROR,
  GET_PROGRAME_TYPE_DETAIL_INFO, GET_PROGRAME_TYPE_DETAIL_INFO_SUCCESS, GET_PROGRAME_TYPE_DETAIL_INFO_ERROR,
  GET_APP_LIST_INFO, GET_APP_LIST_INFO_SUCCESS, GET_APP_LIST_INFO_ERROR,
  GET_APP_PROGRAM_LIST_INFO, GET_APP_PROGRAM_LIST_INFO_SUCCESS, GET_APP_PROGRAM_LIST_INFO_ERROR



} from './constant';

import { getEnvironemntsApi, getprogramDetailApi, getSelectTabProgramDataApi, getappdataApi, getappProgramdataApi } from './api';


/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getEnvironemntInfo() {
  try {
    const data = yield call(getEnvironemntsApi);
    yield put({ type: GET_ENVIRONMENT_INFO_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_ENVIRONMENT_INFO_ERROR, error });
  }
}

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getDashboradProgramData(action) {
  try {
    const data = yield call(getprogramDetailApi, action.param);
    yield put({ type: GET_PROGRAME_DETAIL_INFO_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_PROGRAME_DETAIL_INFO_ERROR, error });
  }
}

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getSelectTabProgramData(action) {
  try {
    const data = yield call(getSelectTabProgramDataApi, action.param);
    yield put({ type: GET_PROGRAME_TYPE_DETAIL_INFO_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_PROGRAME_TYPE_DETAIL_INFO_ERROR, error });
  }
}

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getappdata(action) {
  try {
    const data = yield call(getappdataApi, action.param);
    yield put({ type: GET_APP_LIST_INFO_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_APP_LIST_INFO_ERROR, error });
  }
}

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getAppProgram(action) {
  try {
    const data = yield call(getappProgramdataApi, action.param);
    yield put({ type: GET_APP_PROGRAM_LIST_INFO_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_APP_PROGRAM_LIST_INFO_ERROR, error });
  }
}



/**
 * Get Login Saga
 */
export function* getDashboardSaga() {
  yield takeLatest(GET_ENVIRONMENT_INFO, getEnvironemntInfo);
  yield takeLatest(GET_PROGRAME_DETAIL_INFO, getDashboradProgramData);
  yield takeLatest(GET_PROGRAME_TYPE_DETAIL_INFO, getSelectTabProgramData);
  yield takeLatest(GET_APP_LIST_INFO, getappdata);
  yield takeLatest(GET_APP_PROGRAM_LIST_INFO, getAppProgram)
}
