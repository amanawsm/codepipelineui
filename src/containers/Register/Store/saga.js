import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_REGISTER_USER,
  GET_REGISTER_USER_SUCCESS,
  GET_REGISTER_USER_ERROR

} from './constant';

import { userRegisterApi } from './api';


/**
 * action Type of GET_REGISTER_USER
 * @param {Object} action
 */
function* getUserRegisteration(action) {
  try {
    const data = yield call(userRegisterApi, action.postData);
    console.log('postdata for register: ',data)
    yield put({ type: GET_REGISTER_USER_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_REGISTER_USER_ERROR, error });
  }
}


/**
 * Get Login Saga
 */
export function* getUserRegisterSaga() {
  yield takeLatest(GET_REGISTER_USER, getUserRegisteration);

}
