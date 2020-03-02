import { all } from 'redux-saga/effects';
import { getUserLoginSaga } from '../containers/Login/Store/saga';
import { getDashboardSaga } from '../containers/Dashboard/Store/saga';
import { getUserRegisterSaga } from '../containers/Register/Store/saga';
import { getNormalRequestSaga, addNormalRequestSaga } from '../containers/NormalRequest/Store/saga';
import { getDeploymentRequestSaga } from '../containers/DeploymentRequest/Store/saga';


export default function* rootSaga() {
  yield all([
    getUserLoginSaga(),
    getDashboardSaga(),
    getUserRegisterSaga(),
    getNormalRequestSaga(),
    addNormalRequestSaga(),
    getDeploymentRequestSaga()
  ]);
}
