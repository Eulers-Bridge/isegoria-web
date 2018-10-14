import React from 'react';

import { Link } from 'react-router-dom';

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
    <Link className="logo" to="/">
      <LogoImage src={logo} alt="Isegoria Logo" />
      Isegoria<em>Beta</em>
    </Link>
    <Link to="/about">About Us</Link>
    <Link to="/details">Details</Link>
    <Link to="/contact">Contact</Link>
    <LoginButton
      className="button"
      href="/admin">
      Sign In
    </LoginButton>
  </nav>

export default NavBar;
