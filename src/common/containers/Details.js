import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Content } from './Home';
import './Home.css';

const DetailHeader = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`;

const DetailLink = styled.a`
  color: #4A90E2;
  display: block;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 16px;
  text-transform: uppercase;
`

class Details extends React.Component {
  render() {
    const { staff } = this.props;

    return (
      <Content className="content">
        <NavBar />

        <header className="public-header">
          <div className="container">
            <strong><h1>Need more information?</h1></strong>
            <h2>Feel free to ask us any question you may have via our social networks, or on our contact form below. Alternatively, browse the Isegoria user guides and FAQs on our support page.</h2>
          </div>
        </header>

        <section class="page">
          <div class="container">
            <DetailHeader>Our Policy</DetailHeader>
            <p>See below for our terms of service, which includes user agreements that govern the use of Isegoria, our privacy policy on the information collected and our current security policies and practices.</p>
            <DetailLink href="/policy">Read our full content policy</DetailLink>
            <hr />

            <DetailHeader>Pricing</DetailHeader>
            <p>Isegoria is currently in private beta and details are still being finalized. To find out more about our current pricing mechanism, please contact us and we'll get straight back to you.</p>
            <hr />

            <DetailHeader>Contact Us</DetailHeader>
            <p>We would love to hear from you. Any queries, requests or feedback are always welcome!</p>
            <DetailLink href="/contact">Get in touch!</DetailLink>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Details;
