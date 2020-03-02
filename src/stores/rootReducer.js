import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { LoginStore } from '../containers/Login/Store/reducer';
import { DashboardStore } from '../containers/Dashboard/Store/reducer';
import { RegisterStore } from '../containers/Register/Store/reducer';
import { NormalRequestStore } from '../containers/NormalRequest/Store/reducer';
import { DeploymentRequestStore } from '../containers/DeploymentRequest/Store/reducer';


const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  LoginStore: persistReducer(persistConfig, LoginStore),
  DashboardStore,
  RegisterStore,
  NormalRequestStore,
  DeploymentRequestStore
});

export default rootReducer;
