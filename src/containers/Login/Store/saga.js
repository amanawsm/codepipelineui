import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_AUTH_USER,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_ERROR,

} from './constant';

import { userLoginApi } from './api';


/**
 * action Type of GET_AUTH_USER
 * @param {Object} action
 */
function* getUserLogin(action) {
  try {
    const data = yield call(userLoginApi, action.postData);
    yield put({ type: GET_AUTH_USER_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_AUTH_USER_ERROR, error });
  }
}


/**
 * Get Login Saga
 */
export function* getUserLoginSaga() {
  yield takeLatest(GET_AUTH_USER, getUserLogin);

}
