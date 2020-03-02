import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_DEPLOYMENT_REQUEST, GET_DEPLOYMENT_REQUEST_SUCCESS, GET_DEPLOYMENT_REQUEST_ERROR,
  UPDATE_DEPLOYMENT_REQUEST, UPDATE_DEPLOYMENT_REQUEST_SUCCESS, UPDATE_DEPLOYMENT_REQUEST_ERROR
} from './constant';

import { getDeploymentRequestListApi, updateDploymentRequestStatusApi  } from './api';

/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* getDeploymentRequests(params) {
  try {
    const data  = yield call(getDeploymentRequestListApi, params);
    yield put({ type: GET_DEPLOYMENT_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DEPLOYMENT_REQUEST_ERROR, error });
  }
}
/**
 * action Type of GET_DASHBOARD_INFO
 * @param {Object} action
 */
function* updateDploymentRequestStatus(params) {
  try {
    const data  = yield call(updateDploymentRequestStatusApi, params.param);
    yield put({ type: UPDATE_DEPLOYMENT_REQUEST_SUCCESS, data });
  } catch (error) {
    yield put({ type: UPDATE_DEPLOYMENT_REQUEST_ERROR, error });
  }
}
/**
 * Get Login Saga
 */
export function* getDeploymentRequestSaga() {
  yield takeLatest(GET_DEPLOYMENT_REQUEST, getDeploymentRequests);
  yield takeLatest(UPDATE_DEPLOYMENT_REQUEST, updateDploymentRequestStatus);
}
