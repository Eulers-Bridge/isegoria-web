import React from 'react';

import styled from 'styled-components';
import logo from '../../../public/resources/logo_white.png';

const LoginButton = styled.a`
  #navbar & {
    font-weight: normal;
    margin-left: auto;
  }
`

const LogoImage = styled.img`
  margin-right: 8px;
`

const NavBar = () =>
  <nav id="navbar">
    <a className="logo" href="/">
      <LogoImage src={logo} alt="Isegoria Logo" />
      Isegoria<em>Beta</em>
    </a>
    <a href="/about">About Us</a>
    <a href="/details">Details</a>
    <a href="/contact">Contact</a>
    <LoginButton
      className="button"
      href="/admin">
      Sign In
    </LoginButton>
  </nav>

export default NavBar;
