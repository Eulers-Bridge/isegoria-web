import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../../../public/resources/logo_white.png';

export const StyledNavBar = styled.nav`
  position: absolute;
  font-family: 'MuseoSansRounded';
  height: 60px;
  margin: 0;
  min-height: 60px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;

  @media (max-width: 480px) {
    background-color: #333;
    a {
      display: none;
    }
    a.logo {
      display: block;
    }
  }
`;

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
  <StyledNavBar id="navbar">
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
  </StyledNavBar>

export default NavBar;
