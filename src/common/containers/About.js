import React from 'react';
import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as StaffActions from '../actions/staff';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Content } from './Home';
import './Home.css';

const Profile = styled.div`
  color: #252525;
  flex: 1;
  -webkit-flex-basis: 33.3333333%;
  flex-basis: 33.3333333%;
  margin-bottom: 32px;
  padding: 16px;
  text-align: center;
  width: auto;

  & > img {
    border-radius: 1000px;
    height: 128px;
    width: 128px;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 8px;
    min-width: 250px;
    padding-top: 8px;

    img {
      margin-left: 8px;
    }
  }

  h5 {
    color: #4a90e2;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  hr {
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    color: #f00;
    width: 200px;
  }

  p {
    color: #6b7a8a;
  }
`;

class About extends React.Component {
  render() {
    const { staff } = this.props;

    return (
      <Content className="content">
        <NavBar />

        <header className="public-header">
          <div className="container">
            <strong><h1>Hey! Ni Hao! Hola!</h1></strong>
            <h2>Welcome to Euler’s Bridge, the company behind the platform. We’re committed to building connected and cooperative local networks.</h2>
          </div>
        </header>


        <section className="page">
          <div className="container">
          <h1>Meet the team</h1>
          <p>We’re a rich blend of talent, experiences, and cultures. Just like our home in Melbourne, Australia.</p>
            <hr />
            <div className="grid">

              {
                staff.map(staffMember => {
                  const { name, title, region, bio } = staffMember;
                  const firstName = name.split(' ')[0].toLowerCase();

                  return (
                    <Profile key={`Profile-${name}`}>
                      <img alt="name" src={`resources/profiles/${firstName}.jpg`} />
                      <h3>
                        { name }
                        <img alt={region} src={`resources/region/${region}.png`} srcSet={`resources/region/${region}@2x.png 2x`} />
                      </h3>
                      <h5>{title}</h5>
                      <hr />
                      <p dangerouslySetInnerHTML={{
                        __html: bio
                      }} />
                    </Profile>
                  );
                })
              }
            </div>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  staff: state.staff,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StaffActions, dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps
)(About);
