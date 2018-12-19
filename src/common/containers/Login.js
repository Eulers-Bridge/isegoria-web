import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import * as AuthActions from '../actions/auth';

import { Content, PublicInput } from './Home';
import './Home.css';

const LoginHeader = styled.header`
  flex: 1;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 20px auto 0 auto;
  max-width: 440px;
  text-align: center;

  label {
    display: inline-block;
    margin: 0 40px 20px 0;
    text-align: left;
    width: 60px;
  }

  input {
    margin: 0 10px 30px auto;
    width: 320px;
  }

  textarea {
    height: 160px;
  }

  input[type=submit] {
    background-color: #167EFB;
    border: none;
    color: #fff;
    font-weight: normal;
    max-width: 120px;
    margin: 20px 20px 20px auto;
    text-align: center;
  }
`;

class Login extends React.Component {
  static displayName = 'Login'

  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  _handleChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  login = event => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    event.preventDefault();

    dispatch(AuthActions.attemptLogin(email, password));
  }

  render() {
    const { email, password } = this.state;

    return (
      <Content className="content">
        <NavBar />

        <LoginHeader className="public-header">
          <div className="container">
            <strong><h1>Sign in</h1></strong>
            <FormContainer
              onSubmit={this.login}>
              <div>
                <label htmlFor="email">Email</label>
                <PublicInput
                  name="email"
                  type="email"
                  value={email}
                  onChange={this._handleChange} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <PublicInput
                  name="password"
                  onChange={this._handleChange}
                  type="password"
                  value={password} />
              </div>
              <PublicInput type="submit" value="Sign in" />
            </FormContainer>
          </div>
        </LoginHeader>

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
)(Login);
