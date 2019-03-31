import React from 'react';

import { connect } from 'react-redux';

import utils from '../../utils'

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import { Content } from './Home';
import './Home.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      username: null
    };
  }
  componentDidMount = () => {
    const { location: { search } } = this.props;
    const urlParams = utils.queryStringToObject(search);

    this.setState({
      message: urlParams.message,
      success: urlParams.success,
      username: urlParams.username
    });
  }

  render() {
    const { message, success, username } = this.state;
    const successMessage = (success && success !== 'false')
      ? `Thanks for signing up! Your email address has been successfully verified`
      : `Unfortunately we were unable to verify your email address. Please try again later.`;
    const additionalMessage = message
      ? ` ${message}`
      : ``;

    return (
      <Content className="content">
        <NavBar />

        <header className="public-header">
          <div className="container">
            <strong><h1>Welcome{ username ? `, ${username}` : '' }!</h1></strong>
            <h2>{ successMessage }{ additionalMessage }</h2>
          </div>
        </header>

        <Footer />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps
)(Welcome);
