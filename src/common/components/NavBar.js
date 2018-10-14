import React from 'react';

import styled from 'styled-components';

const LoginButton = styled.a`
  #navbar & {
    font-weight: normal;
    margin-left: auto;
  }
`

const NavBar = () =>
  <nav id="navbar">
    <a className="logo" href="/">
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
