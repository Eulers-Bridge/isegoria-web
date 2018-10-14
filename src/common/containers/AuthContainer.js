import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { push } from 'connected-react-router';

import { setRedirectUrl } from '../actions/auth';

import Admin from './Admin';

class AuthContainer extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL, isLoggedIn } = this.props

    if (!isLoggedIn) {
      // ##TODO##
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      dispatch(setRedirectUrl(currentURL))
      dispatch(push("/login"))
    }
  }

  render() {
    const { isLoggedIn } = this.props

    if (isLoggedIn) {
      return (
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/fuckit" component={Admin} />
        </Switch>
      )
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.auth.loggedIn,
    currentURL: state.router.location.pathname
  }
}

export default connect(mapStateToProps)(withRouter(AuthContainer))
