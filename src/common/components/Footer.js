import React from 'react';

import styled from 'styled-components';

import linkedin from '../../icons/linkedin.svg';
import twitter from '../../icons/twitter.svg';


const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1em;
`;

const FooterNav = styled.nav`
  height: auto; /* ##TODO## :: Remove once nav sytling gone from main CSS */
  margin: 1em auto;
  position: relative;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const SocialLinks = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em auto;

  a {
    display: block;
    margin: 0 1em;
  }
`;

const Copyright = styled.p`
  font-size: 80%;
  margin: 2em auto 1em auto;
  opacity: 0.5;
  text-align: center;
`;

export default () => {
  const year = (new Date()).getFullYear();

  return (
    <StyledFooter>
      <FooterNav>
        <a href="/about">About Us</a>
        <a href="/details">Details</a>
      </FooterNav>

      <hr />

      <SocialLinks>
        <a href="https://twitter.com/EulersBridge" target="_blank" rel="noopener noreferrer">
          <img src={twitter} width="32" alt="Twitter logo" />
        </a>
        <a href="https://www.linkedin.com/company/euler's-bridge/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} width="32" alt="LinkedIn logo" />
        </a>
      </SocialLinks>

      <Copyright>&copy; Euler’s Bridge {year}. Registered Trademark Isegoria. All Rights Reserved</Copyright>
    </StyledFooter>
  )
}
