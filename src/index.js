import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import NotFound from './pages/NotFound';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<NotFound />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
