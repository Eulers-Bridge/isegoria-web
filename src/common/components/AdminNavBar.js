import React from 'react';

import styled from 'styled-components';
import logo from '../../../public/resources/logo_white.png';

import { StyledNavBar } from './NavBar';

const LogoutButton = styled.button`
   nav & {
    font-weight: normal;
    margin-left: auto;
  }
`

const LogoImage = styled.img`
  margin-right: 8px;
`

const AdminNavBar = ({logout, title}) =>
  <StyledNavBar className="dark">
    <a className="logo" href="/">
      <LogoImage src={logo} alt="Isegoria Logo" />
      Isegoria<em>Beta</em>
    </a>

    <a href="/admin">{title}</a>

    <LogoutButton
      className="button"
      onClick={logout}>
      Sign Out
    </LogoutButton>
  </StyledNavBar>

export default AdminNavBar;
