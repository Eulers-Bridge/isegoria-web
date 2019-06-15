import React from 'react';

import { connect } from 'react-redux';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';

import Home from './Home';
import About from './About';
import AuthContainer from './AuthContainer';
import Contact from './Contact';
import Details from './Details';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import PrivacyPolicy from './PrivacyPolicy';
import Security from './Security';
import Terms from './Terms';
import Trial from './Trial';
import Welcome from './Welcome';

import './Fonts.css';
import './App.css';

class App extends React.Component {
  componentDidUpdate (prevProps) {
    const { dispatch, redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      dispatch(push(redirectUrl));
    } else if (isLoggingOut) {
      dispatch(push('/'));
    }
  }

  render () {
    return (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/details" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/security" component={Security} />
        <Route path="/terms" component={Terms} />
        <Route path="/trial" component={Trial} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/" component={Home} />

        <Route component={AuthContainer} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.loggedIn,
    redirectUrl: state.auth.redirectUrl
  }
}

export default withRouter(connect(mapStateToProps)(App));
