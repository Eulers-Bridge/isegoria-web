import React from 'react';
import styled from 'styled-components';

import HubspotForm from 'react-hubspot-form'

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import { Content } from './Home';
import './Home.css';

const FormContainer = styled.div`
  margin: 20px auto 0 auto;

  input {
    margin: 0 auto 30px auto;
  }

  textarea {
    height: 160px;
  }

  input[type=submit] {
    background-color: #167EFB;
    color: #fff;
    max-width: 120px;
    margin: 20px 20px 20px auto;
    text-align: center;
  }
`;

class Contact extends React.Component {
  render() {
    return (
      <Content className="content">
        <NavBar />

        <header className="public-header">
          <div className="container">
            <strong><h1>Hi, we're Euler's Bridge.</h1></strong>
            <h2>We're a small software development team based in Melbourne, Australia; focused on introducing brilliant ideas to reality.</h2>
          </div>
        </header>


        <section className="page">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Please provide your details below and someone from the team will be in touch:</p>
            <FormContainer>
              <HubspotForm
                portalId="2895682"
                formId="3e2f56a5-f974-4166-a59a-f71940b6eefb"
                css="" />
            </FormContainer>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Contact;
