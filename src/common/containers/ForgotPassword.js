import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import utils from '../../utils'

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import { Content } from './Home';
import './Home.css';

const FormContainer = styled.form`
  margin: 20px auto 0 auto;
  max-width: 480px;

  input {
    /* margin: 0 auto 30px auto; */
  }

  textarea {
    /* height: 160px; */
  }

  button {
    background-color: #167EFB;
    color: #fff;
    /* display: block; */
    /* max-width: 120px; */
    /* margin: 20px 20px 20px auto; */
    text-align: center;
  }
`;

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      newPassword: '',
      newPasswordConfirm: '',
      serverId: null,
      token: null
    };
  }
  componentDidMount = () => {
    const { location: { search } } = this.props;
    const urlParams = utils.queryStringToObject(search);

    this.setState({
      email: urlParams.email,
      serverId: urlParams.i,
      token: urlParams.token
    });
  }

  _sendReset = e => {
    e.preventDefault();

    const { email, serverId, token } = this.state;
    const { newPassword, newPasswordConfirm } = this.state;

    if (newPassword !== newPasswordConfirm) {
      alert('Password confirmation does not match!');
      return false;
    }

    // ##TODO## :: Handle switching
    console.log(`${serverId}/reset`);

    utils.apiPost(`resetPwd`, {
      body: JSON.stringify({
        email,
        password: newPassword,
        token
      }),
      method: 'PUT'
    })
      .then(result => {
        const { status } = result
        if (status < 200 || status >= 300) {
          alert('Unable to reset password. Please confirm your email address is correct or try again later.')
          return false
        }

        result.text().then(text => {
          alert(text || 'Password successfully reset');
          window.location = '/';
          return text;
        })
      });
  }

  _sendResetRequest = e => {
    e.preventDefault();

    const { email } = this.state

    utils.apiPost(`requestPwdReset/${email}`)
      .then(result => {
        const { status } = result
        if (status < 200 || status >= 300) {
          alert('Unable to reset password. Please confirm your email address is correct or try again later.')
          return false
        }

        result.text().then(text => {
          alert(text);
          return text;
        })
      })
  }

  render() {
    const { token } = this.state

    return (
      <Content className="content">
        <NavBar />

        <header className="public-header">
          <div className="container">
            <strong><h1>Password Reset</h1></strong>
            <h2>Please fill in the form below for assistance with lost passwords.</h2>
          </div>
        </header>

        <section className="page">
          <div className="container">
            {
              // No token, ask for email address
              !token &&
                <FormContainer>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    onChange={
                      e => this.setState({email: e.target.value})
                    }
                    type="email"
                    value={this.state.email} />

                  <br />

                  <button
                    id="sendResetRequest"
                    onClick={this._sendResetRequest}
                    type="submit"
                  >
                    Reset
                  </button>
                </FormContainer>
            }
            {
              // Token ready, ask for new password
              token &&
                <FormContainer>
                  <p>Please enter your new password:</p>

                  <label htmlFor="newPassword">New Password</label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    onChange={
                      e => this.setState({newPassword: e.target.value})
                    }
                    type="password"
                    value={this.state.newPassword} />
                  <br />

                  <label htmlFor="newPasswordConfirm">Confirm Password</label>
                  <input
                    id="newPasswordConfirm"
                    name="newPasswordConfirm"
                    onChange={
                      e => this.setState({newPasswordConfirm: e.target.value})
                    }
                    type="password"
                    value={this.state.newPasswordConfirm} />
                  <br />

                  <button
                    id="sendReset"
                    onClick={this._sendReset}
                    type="submit"
                  >
                    Reset
                  </button>
                </FormContainer>
            }
          </div>
        </section>

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
)(ForgotPassword);
