import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import reducers from './rootReducer';
import sagas from './rootSaga';


const logger = createLogger({
  // ...options
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(sagas);
const persistor = persistStore(store);
export { store, persistor };
