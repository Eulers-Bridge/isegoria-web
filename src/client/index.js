import App from '../common/containers/App';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from '../common/store/configureStore';

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const initialAuth = initialState.auth;

const localAuth = window && window.localStorage
  ? { user: JSON.parse(window.localStorage.getItem('u')) }
  : {}

const store = configureStore(Object.assign(
  initialState,
  {
    auth: {
      ...initialAuth,
      ...localAuth
    }
  }
), history);

let currentState;
const unsubscribeUser = store.subscribe(() => {
  let prevState = currentState;
  currentState = store.getState();

  if (window && window.localStorage) {
    window.localStorage.setItem('u', JSON.stringify(currentState.auth.user));
  }
})

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
