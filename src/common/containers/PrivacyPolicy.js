import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Content } from './Home';
import './Home.css';



const PolicyHeader = styled.header`
  background: none;

  p {
    color: rgba(255, 255, 255, 0.5);
    font-weight: normal;
    margin-top: 16px;
  }
`;

const PolicySection = styled.div`
  margin-bottom: 32px;

  && p {
    color: #000;
    margin: 8px;
  }
  && li {
    margin: 16px 0;

    li {
      margin: 8px 0;
    }
  }
  a {
    margin: 0 4px;
  }
  strong {
    font-size: inherit;
  }
  super {
    font-size: 60%;
    vertical-align: top;
  }
  table {
    border: 1px solid #eee;
    margin: 16px auto 64px auto;
    width: 80%;

    th {
      text-align: left;
    }
    th, td {
      padding: 8px;
    }
  }
`;
const PolicyFootnote = styled(PolicySection)`
  border-top: 1px solid #ccc;
  font-size: 80%;
  margin: 64px 8px 8px 8px;
  padding-top: 8px;
`;

const PolicySectionHeader = styled.h4`
  margin-bottom: 8px;
`;

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Content className="content">
        <NavBar dark />

        <PolicyHeader>
          <div className="container">
            <strong><h1>Privacy Policy</h1></strong>
            <h2>Effective 1st January 2014</h2>
            <p>
              References to “Euler’s Bridge”, “the team”, “we”, “us” or “our” are made in relation
              to Eulers Bridge Pty Ltd A.C.N. 168 806 497 c/o Minter Ellison, Level 23, Rialto
              Towers, 525 Collins Street, Melbourne VIC 3000, AUSTRALIA
            </p>
          </div>
        </PolicyHeader>

        <section className="page">
          <div className="container">
            <PolicySection>
              <PolicySectionHeader>
                1. Introduction
              </PolicySectionHeader>
              <p>
                We recognise the importance of privacy and are committed to
                protecting the privacy of individuals when handling personal
                information.
              </p>
              <p>
                This Privacy Policy explains how we collect, hold, use, disclose,
                protect and otherwise handle personal information in an open and
                transparent manner in accordance with the Australian Privacy
                Principles contained in the <em>Privacy Act 1988 (Cth).</em><super>1</super>
              </p>
              <p>
                By providing us with your personal information you consent to us
                using, disclosing and otherwise handling it in accordance with
                this Privacy Policy as updated from time to time.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                2. Personal information that we collect and hold
              </PolicySectionHeader>
              <p>
                We may collect and hold your personal information for purposes relating to the
                provision of our services, via the Isegoria app and your personal account as a use
                of the app. Your personal information, provided by explicit consent, will be
                utilised in order to maximise the user-experience and to enable us to provide
                analytics regarding use. This is detailed in Section 5 of this policy.
              </p>
              <p>
                The kinds of personal information that we may collect and hold include your name;
                institutional email address; gender; year of birth; institutional country (where
                your University is located) and other meta-data outlined in Sections 3 and 4 of this
                policy.
              </p>
              <p>
                Where you do not provide us with all or some of your personal information that we
                request then we might not be able to provide the full range of our services,
                including comprehensive analytics determining behavioural use trends.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                3. Clickstream data that we collect and hold
              </PolicySectionHeader>
              <p>
                We may use cookies, web beacons or similar technologies to collect de-identified
                information about your visits to our website isegoria.app
                (<strong>“Website”</strong>) and about your use of the app
                (<strong>“Isegoria”</strong>) for the purpose of improving your experience browsing
                our Website and using Isegoria. For example, when you visit our Website or use
                Isegoria we may collect your server address, domain name, operating system, browser
                type, pages accessed, documents downloaded, previous visits, referring website, and
                visit date and time. You may set your browser or Isegoria (via in-app settings) to
                disable cookies but some parts of our Website and Isegoria may not function properly
                if cookies are disabled.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                4. How we collect and hold personal information
              </PolicySectionHeader>
                <p>
                  We will usually collect your personal information directly from you.
                  For example, we will collect your personal information when you:
                </p>

                <ul>
                  <li>
                    <strong>Account and profile information.</strong>
                    The only information we require to create your Isgeoria account is:
                    <ul>
                      <li>Your name</li>
                      <li>Your institutional email address</li>
                      <li>Your gender</li>
                      <li>Your year of birth</li>
                      <li>Your institutional country (where you University is located)</li>
                      <li>A password</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Log data.</strong> When you use Isegoria, our servers automatically
                    record information including information that your browser sends whenever you
                    visit a website or your mobile app sends when you’re using it. This log data may
                    include your Internet Protocol address and cookie data.
                  </li>
                  <li>
                    <strong>Device information.</strong> In addition to log data, we may also
                    collect information about the device you’re using Isegoria on, including what
                    type of device it is, what operating system you’re using, device settings,
                    unique device identifiers, and crash data. Whether we collect some or all of
                    this information often depends on what type of device you’re using and its
                    settings.
                  </li>
                  <li>
                    <strong>Geo-location information.</strong> Precise GPS from mobile devices is
                    collected only with your explicit permission granted via the settings in
                    Isegoria. WiFi and IP addresses received from your browser or device may be used
                    to determine approximate location. You are able to toggle this function
                    “on”/”off” at any time.
                  </li>
                </ul>
                <p>
                  We may collect your personal information in a variety of different ways outside of
                  Isegoria including in person or by telephone, letter, facsimile, email or by you
                  visiting our Website.
                </p>
                <p>
                  We may also collect your personal information from a third party or publicly
                  available source where it is unreasonable or impracticable to collect the
                  information directly from you. For example, we may collect your personal
                  information from the institution itself or associated Students’ Union or Guild or
                  other legally instituted representative organisation of which you are a member.
                  This will be in full observance of any regional or domestic data-protection
                  requirements applicable in the jurisdiction of Euler’s Bridge and of your
                  institution.
                </p>
                <p>
                  We may hold your personal information that we collect in both physical and
                  electronic storage facilities including secure, paper-based files and secure
                  computer or cloud databases.
                </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                5. How we use and disclose personal information
              </PolicySectionHeader>
              <p>
                We may use and disclose your personal information that we hold for purposes relating
                to generating real-time analytics dashboards and visualisations. This will include
                mixpanel.com and Tableau reporting software. Examples and explanations of this can
                be provided for upon request. We work hard to ensure minimal interference.
              </p>
              <p>
                We will share these analytics with your institution or associated Students’ Union or
                Guild or other legally instituted representative organisation of which you are a
                member. This will be in full observance of any regional or domestic data-protection
                requirements applicable in the jurisdiction of Euler’s Bridge and of your
                institution.
              </p>
              <p>
                We may collaborate with leading institutions for the purpose of research, but
                user-information which may identify individuals or infringe privacy will be avoided.
              </p>
              <p>
                We will not use or disclose your personal information for any other purpose without
                your consent except where required or authorised by law.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                6. How we protect personal information
              </PolicySectionHeader>
              <p>
                We will take all reasonable steps to protect your personal information that we hold
                from misuse, interference and loss, and from unauthorised access, modification or
                disclosure using both physical and electronic security measures. Any physical
                records held will be protected through secure premises and secure, monitored filing
                systems.
              </p>
              <p>
                We take reasonable steps to protect information you provide to us as part of your
                use of the Isegoria service from loss, misuse, and unauthorized access or
                disclosure. When you enter sensitive information (such as sign-in credentials) we
                encrypt the transmission of that information using secure socket layer technology
                (SSL). We follow generally accepted standards to protect the personal data submitted
                to us, both during transmission and once we receive it. However, no electronic or
                email transmission or digital storage mechanism is ever fully secure or error free.
              </p>
              <p>
                By providing us with your personal information over the Internet you accept that
                such information will be transmitted at your own risk as the security of such
                information cannot be guaranteed.
              </p>
              <p>
                We will not retain your personal information if we no longer need it for any purpose
                for which we may lawfully use or disclose it and we are not authorised or required
                by law to retain it.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                7. Personal information access and correction
              </PolicySectionHeader>
              <p>
                You may request us to provide you with access to any of your personal information
                that we hold. We may charge a reasonable fee for giving you access to your personal
                information upon request.
              </p>
              <p>
                You may also request us to correct any of your personal information that we hold
                which is inaccurate, out-of-date, incomplete, irrelevant or misleading.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                8. Privacy Policy updates
              </PolicySectionHeader>
              <p>
                We may update this Privacy Policy from time to time to take into account changes in
                our practices for the handling of personal information by publishing an amended
                Privacy Policy on our Website. You should regularly review the most recent version
                of this Privacy Policy available on our Website.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                9. Our contact details
              </PolicySectionHeader>
              <p>
                If you require access to or seek correction of any of your personal information that
                we hold, or should you have any queries or require a complaint dealt with about our
                handling of your personal information, please contact our Privacy Officer using the
                contact details below:
              </p>
              <table>
                <tr>
                  <td colSpan="2">James Hutton, Partner, Minter Ellison</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>+61 3 8608 2000</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>support@eulersbridge.com</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    Eulers Bridge Pty Ltd<br />
                    A.C.N. 168 806 497<br />
                    c/o Minter Ellison<br />
                    Level 23, Rialto Towers<br />
                    525 Collins Street,<br />
                    Melbourne,<br />
                    Victoria 3000,<br />
                    AUSTRALIA
                  </td>
                </tr>
              </table>
              <p>
                This Privacy Policy is effective as of 1<super>st</super> January 2014
              </p>
            </PolicySection>
          </div>

          <div className="container">
            <PolicyFootnote>
              <super>1</super> Respect is paid to privacy principles within the jurisdiction wherein
              the user and institution is located. For example in the territory covered by the
              European Union (EU) the associated primary and secondary legal privacy standards will
              provide guidance for this policy (such as the EU data protection directive of 1995) as
              well as domestic protection such as the Data Protection Act 1998 in the United Kingdom
              and its eight associated principles.
            </PolicyFootnote>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default PrivacyPolicy;
