import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import NetworkService from './utils/network-service';
import { store, persistor } from './stores/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

NetworkService.setupInterceptors(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
