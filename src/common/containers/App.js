import React from 'react';

import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

import Admin from './Admin';
import Home from './Home';
import About from './About';
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

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) =>
  <Route
    {...rest}
    render={props => isLoggedIn
      ? <Component {...props} />
      : <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
    }
  />

class App extends React.Component {
  render () {
    const { isLoggedIn } = this.props;

    return (
      <div>
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

        <PrivateRoute isLoggedIn={isLoggedIn} path="/admin" component={Admin} />

        <Route path="/" exact component={Home} />
      </div>
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
