import React from 'react';

import styled from 'styled-components';
import logo from '../../../public/resources/logo_white.png';

const NavBar = styled.nav`
  position: absolute;
  font-family: 'MuseoSansRounded';
  background-color: #333;
  height: 60px;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
`

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
  <NavBar>
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
  </NavBar>

export default AdminNavBar;
