import React from 'react';
import styled from 'styled-components';
import utils from '../../utils';

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

class Trial extends React.Component {
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
            <h1>Interested in a trial?</h1>
            <p>Please provide your details below and someone from the team will be in touch:</p>
            <FormContainer
              method="post"
            >
              <FormRow>
                <label
                  htmlFor="orgname"
                >
                  Organisation name
                </label>
                <input
                  id="orgname"
                  name="orgname" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="orgtype"
                >
                  Organisation type
                </label>
                <select
                  id="orgtype"
                  name="orgtype"
                >
                  <option value="Industry body">Industry body</option>
                  <option value="Incorporated association">Incorporated association</option>
                  <option value="Community groups">Community group</option>
                  <option value="Club or society">Club or society</option>
                  <option value="Volunteer group">Volunteer group</option>
                  <option value="Other">Other</option>
                </select>
              </FormRow>

              <FormRow>
                <label
                  htmlFor="orgsize"
                >
                  Organisation size
                </label>
                <select
                  id="orgsize"
                  name="orgsize"
                >
                  <option value="< 150">{`< 150`}</option>
                  <option value="151 - 500">{`151 - 500`}</option>
                  <option value="501 - 1,500">{`501 - 1,500`}</option>
                  <option value="> 1,500">{`> 1,500`}</option>
                </select>
              </FormRow>

              <FormRow>
                <label
                  htmlFor="country"
                >
                  Country
                </label>
                <select name="Country"> 
                  <option value="" selected="selected">Select Country</option> 
                  {
                    utils.COUNTRIES.map(country =>
                      <option value={country}>{country}</option>
                    )
                  }
                </select>
              </FormRow>
              
              <FormRow>
                <label
                  htmlFor="email"
                >
                  Contact email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="comment"
                >
                  Comments
                </label>
                <textarea
                  id="comment"
                  name="comment" />
              </FormRow>
              
              <FormRow>
                <input
                  type="submit"
                  value="Request information" />
              </FormRow>
            </FormContainer>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Trial;
