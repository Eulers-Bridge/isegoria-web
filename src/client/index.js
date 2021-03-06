import App from '../common/containers/App';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from '../common/store/configureStore';
import { SnackbarProvider } from 'notistack';

import { StylesProvider } from '@material-ui/styles';

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
  auth: {
    user: {}
  }
};
store.subscribe(() => {
  let prevState = currentState;
  currentState = store.getState();

  const { auth = {} } = currentState

  const userChanged = auth.user !== prevState.auth.user
  const hasPassword = auth.user && auth.user.password
  const localStorageAvailable = window && window.localStorage
  const loggingOut = prevState.auth.loggedIn && !auth.loggedIn

  if (localStorageAvailable && userChanged && hasPassword) {
    window.localStorage.setItem(
      'u', JSON.stringify(currentState.auth.user)
    );
  }

  if (localStorageAvailable && loggingOut) {
    window.localStorage.removeItem('u')
  }
})

if (localAuth.user && localAuth.user.password) {
  const { email, password } = localAuth.user
  store.dispatch(
    AuthActions.attemptLogin(email, password, () => push('/admin'))
  );
}

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <SnackbarProvider maxSnack={3}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </SnackbarProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
