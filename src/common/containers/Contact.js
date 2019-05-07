import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import { Content } from './Home';
import './Home.css';

const FormContainer = styled.form`
  margin: 20px auto 0 auto;

  input {
    margin: 0;
  }

  input, select, submit {
    font-size: 120%;
  }

  textarea {
    height: 160px;
  }

  input[type=submit] {
    background-color: #167EFB;
    color: #fff;
    margin: 0 0 0 auto;
    padding: 10px;
    text-align: center;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto 20px auto;
  max-width: 480px;
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
            <FormContainer
              action="https://docs.google.com/forms/d/e/1FAIpQLSd6XGWNiOTSa1WyMrp91STavNbdMZtIztD39S0Yaem5O-WFYg/formResponse"
              method="post"
            >
              <FormRow>
                <label
                  htmlFor="firstname"
                >
                  First name
                </label>
                <input
                  id="firstname"
                  name="entry.327626009" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="lastname"
                >
                  Last name
                </label>
                <input
                  id="lastname"
                  name="entry.1253387652" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="email"
                >
                  Contact email
                </label>
                <input
                  id="email"
                  name="entry.1533294167"
                  type="email" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="entry.505294611" />
              </FormRow>

              <FormRow>
                <input
                  type="submit"
                  value="Submit" />
              </FormRow>
            </FormContainer>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Contact;
