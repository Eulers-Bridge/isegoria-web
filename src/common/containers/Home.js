import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import './Home.css';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 100vh;
`;

// ##TODO## :: Still just a port of trashy old CSS
export const PublicInput = styled.input`
  border: none;
  border-bottom: solid 2px #D8D8D8;
  color: #6B7A8A;
  display: inline-block;
  font-size: 1em;
  font-weight: 100;
  margin-right: 8px;
  margin-top: 2em;
  outline: none;
  padding: 0.75em 2em;
  text-align: left;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  width: 70%;

  &:focus {
    background-color: rgba(126,126,126,0.2);
    border-bottom: solid 2px rgba(126,126,126,1);
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <Content className="content">
        <NavBar />

        <header className="public-header">
          <div className="container">
          <strong><h1>Bridging Communities, Together.</h1></strong>
          <h2>Introducing Isegoria - a graph analytics platform to empower your
          community.</h2>
          <button onClick={
            () => window.location.href='mailto:support@eulersbridge.com?subject=Request%20Isegoria%20demo'
          }>Request a Demo</button>
          </div>
        </header>


        <section className="page">
          <div className="container">
          <h1>What is Isegoria?</h1>
          <p>Isegoria is a brand new social platform which helps you connect, discover, shape and expand your community role within a revolutionary mobile-first experience.</p>
            <hr />
            <div className="grid">

              <div className="feature">
                <img alt="Build Network Effects" src="/resources/network.png" srcSet="/resources/network@2x.png 2x" />
                <h3>Build Network Effects</h3>
                <p>Your open network is the #1 predictor of career success, and drives
                both innovation and fundraising. Harness it now.</p>
              </div>


              <div className="feature">
                <img alt="Community Driven" src="/resources/community.png" srcSet="/resources/community@2x.png 2x" />
                <h3>Community Driven</h3>
                <p>At Isegoria we're all for both people and relationships. Promote social
                interaction tailored to individual and group interests.</p>
              </div>


              <div className="feature">
                <img alt="Social Learning" src="/resources/learning.png" srcSet="/resources/learning@2x.png 2x" />
                <h3>Social Learning</h3>
                <p>By exploring and promoting true positive change between individuals and
                groups, Isegoria will reward your efforts.</p>
              </div>

          </div>
          </div>
        </section>

          <div className="container line"><hr /></div>

        <section className="page">
          <div className="container">
            <div className="grid">

              <div className="feature mini">
                <img alt="Design" src="/resources/design.png" srcSet="/resources/design@2x.png 2x" />
                <h3>Design</h3>
                <p>We've built a beautiful user interface for both administrators and
                users. Everything looks crisp and modern as mobile apps should.</p>
              </div>


              <div className="feature mini">
                <img alt="Security" src="/resources/security.png" srcSet="/resources/security@2x.png 2x" />
                <h3>Security</h3>
                <p>Isegoria uses the most security-sensitive data centre and network
                architecture available, thanks to Amazon Web Services.</p>
              </div>


              <div className="feature mini">
                <img alt="Scalability" src="/resources/scalability.png" srcSet="/resources/scalability@2x.png 2x" />
                <h3>Scalability</h3>
                <p>Whether you're a small group of volunteers or part of a world-leading
                institution, our service is scalable to any need.</p>
              </div>


              <div className="feature mini">
                <img alt="Complexity" src="/resources/complexity.png" srcSet="/resources/complexity@2x.png 2x" />
                <h3>Complexity</h3>
                <p>Our graph database eats complex queries for breakfast. Break free of
                siloed data stores and view your network through a whole new lens.</p>
              </div>

            </div>
          </div>
        </section>


        <section className="page blue">
          <div className="container">
            <h1>Sound Interesting?</h1>


            <h2>Download the app today for both iOS and Android. Alternatively, give us
            a buzz and we'll demonstrate the benefits of Isegoria tailored to your
            organisation.</h2>
            <button onClick={
              () => window.location.href='mailto:support@eulersbridge.com?subject=Request%20Isegoria%20demo'
            }>Request a Demo</button>

            <ul>
              <li>Build trust and experience faster sharing and greater productivity</li>
              <li>Develop and shape diverse leadership across your network</li>
              <li>Get insight on emergent macro patterns from your community network
              structure and dynamic interactions</li>
              <li>Make better and faster investment decisions that respond to your
              community needs</li>
            </ul>

          </div>
        </section>


        <section className="page">
          <div className="container">
            <h1>Sign up for launch updates!</h1>
            <h2>Whether you're a student or a faculty member interested in bringing
            Isegoria to your institution, sign up here to find out when we're releasing;
            as well as any important updates related to our grand launch.</h2>
            <div className="grid">
              <form action="//eulersbridge.us14.list-manage.com/subscribe/post?u=1a8308a6b9e7bab17571028d1&amp;id=2830217c18" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <PublicInput type="email" placeholder="Email address" id="mce-EMAIL" name="EMAIL" />
                <button type="submit" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><PublicInput type="text" name="b_1a8308a6b9e7bab17571028d1_2830217c18" tabIndex="-1" defaultValue="" /></div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Home;
