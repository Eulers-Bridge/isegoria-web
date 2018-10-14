import App from '../common/containers/App';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from '../common/store/configureStore';

import * as AuthActions from '../common/actions/auth';

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__;
const initialAuth = initialState.auth;

const localAuth = (window && window.localStorage)
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

let currentState = {
  auth: {}
};
const unsubscribeUser = store.subscribe(() => {
  let prevState = currentState;
  currentState = store.getState();

  const userChanged = currentState.auth.user !== prevState.auth.user
  const hasPassword = !!currentState.auth.user.password
  const localStorageAvailable = window && window.localStorage

  if (localStorageAvailable && userChanged && hasPassword) {
    window.localStorage.setItem(
      'u', JSON.stringify(currentState.auth.user)
    );
  }
})

if (localAuth.user && localAuth.user.password) {
  const { email, password } = localAuth.user
  store.dispatch(
    AuthActions.attemptLogin(email, password)
  );
}

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
