import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_NORMAL_REQUEST, GET_NORMAL_REQUEST_SUCCESS, GET_NORMAL_REQUEST_ERROR,
  ADD_NORMAL_REQUEST, ADD_NORMAL_REQUEST_SUCCESS, ADD_NORMAL_REQUEST_ERROR
} from './constant';

import { getNormalRequestListApi, addNormalRequestListApi  } from './api';

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getNormalRequests(params) {
  try {
    const data  = yield call(getNormalRequestListApi, params);
    yield put({ type: GET_NORMAL_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_NORMAL_REQUEST_ERROR, error });
  }
}

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* addNormalRequests(datalist) {
  try {
    const data  = yield call(addNormalRequestListApi, datalist.param);
    yield put({ type: ADD_NORMAL_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({ type: ADD_NORMAL_REQUEST_ERROR, error });
  }
}
/**
 * Get Login Saga
 */
export function* getNormalRequestSaga() {
  yield takeLatest(GET_NORMAL_REQUEST, getNormalRequests);
}

/**
 * Add Normalrequest Saga
 */
export function* addNormalRequestSaga() {
  yield takeLatest(ADD_NORMAL_REQUEST, addNormalRequests);
}
