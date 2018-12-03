import React from 'react';

import styled from 'styled-components';

import linkedin from '../../icons/linkedin.svg';
import twitter from '../../icons/twitter.svg';


const StyledFooter = styled.footer`
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
  margin: 1em auto;
  text-align: center;
`;

export default () =>
  <StyledFooter>
    <FooterNav>
      <a href="/about">About Us</a>
      <a href="/details">Details</a>
    </FooterNav>

    <hr />

    <SocialLinks>
      <a href="https://twitter.com/EulersBridge" target="_blank">
        <img src={twitter} width="32" />
      </a>
      <a href="https://www.linkedin.com/company/euler's-bridge/" target="_blank">
        <img src={linkedin} width="32" />
      </a>
    </SocialLinks>

    <Copyright>&copy; Euler’s Bridge 2017</Copyright>
  </StyledFooter>
