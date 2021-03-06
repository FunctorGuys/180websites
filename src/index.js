import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configStore from '@/redux/store';

import App from './App';

import { BASE_PATH } from '@/config';

import 'normalize.css';
import './styles/main.scss';

const { store, persistor } = configStore();

export const _store = store;

ReactDOM.render(
  <Provider store={_store}>
    <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
      <BrowserRouter basename={BASE_PATH}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
