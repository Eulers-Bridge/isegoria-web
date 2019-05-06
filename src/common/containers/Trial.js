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
              action="https://docs.google.com/forms/d/e/1FAIpQLSfCcA0N1THGwoq81vyl_whYpmBdM21PK_H8BrK2CSru8cDWOA/formResponse"
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
                  name="entry.1999517077" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="orgtype"
                >
                  Organisation type
                </label>
                <select
                  id="orgtype"
                  name="entry.213599097"
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
                  name="entry.1662613538"
                >
                  <option value="< 150">{`< 150`}</option>
                  <option value="151 - 500">{`151 - 500`}</option>
                  <option value="501 - 1,500">{`501 - 1,500`}</option>
                  <option value="> 1,500">{`> 1,500`}</option>
                </select>
              </FormRow>

              <FormRow>
                <label
                  htmlFor="electiondate"
                >
                  Election date
                </label>
                <input
                  id="electiondate"
                  name="entry.2135680696"
                  type="date" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  defaultValue=""
                  id="country"
                  name="entry.144536979"
                >
                  <option value="">Select Country</option>
                  {
                    utils.COUNTRIES.map((country, i) =>
                      <option value={country} key={i}>{country}</option>
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
                  name="entry.292765850"
                  type="email" />
              </FormRow>

              <FormRow>
                <label
                  htmlFor="comments"
                >
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="entry.1862773477" />
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
