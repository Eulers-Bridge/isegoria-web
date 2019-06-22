import React from 'react';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Content } from './Home';
import './Home.css';


// ##TODO## :: Dedup
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

const PolicySectionHeader = styled.h4`
  margin-bottom: 8px;
`;

class Security extends React.Component {
  render() {
    return (
      <Content className="content">
        <NavBar dark />

        <PolicyHeader>
          <div className="container">
            <strong>
              <h1>Isegoria Security Practices</h1>
            </strong>
            <h2>Effective 1st January 2015</h2>
            <p>
              Each and every Isegoria user can expect their data to be secured using industry
              practice technologies for their confidentiality and privacy. We work to the best of
              our abilities to ensure full respect is paid to these important principles and to
              ensure that users’ expectations are met. Please review the below, in addition to our
              Privacy Policy which deals with this in further detail.
            </p>
            <p>
              This statement of security practices is a living document and may evolve in line with
              progressive technology, security, institutional advancements and legal change.
            </p>
          </div>
        </PolicyHeader>

        <section className="page">
          <div className="container">
            <PolicySection>
              <PolicySectionHeader>
                1.	App Security
              </PolicySectionHeader>
              <p>
                1.1 Isegoria uses 256-bit AES and 1024-bit SSL certificates for internet and
                application security. We monitor the security community's output closely and work
                promptly to upgrade the service to respond to new vulnerabilities as they are
                discovered. As a team we work to ensure we follow best practice and strive to
                operate at the cutting edge of all aspects of privacy and technology which apply to
                your use of our services.
              </p>
              <p>
                1.2 We contract with respected, external security firms to audit Isegoria and ensure
                our practices perform adequately and to monitor our position in light of technical
                advancements.
              </p>
              <p>
                1.3 Our servers are provided by Amazon Web Services (AWS) and located in Sydney,
                Australia. They are physically secured by AWS.
              </p>
              <p>
                1.4 The greatest security risk to any system is usually the behaviour of its users.
                In order to provide you with greater control over your account, we log account
                activity and can make this record available (privately – see our Privacy Policy) to
                you on request in writing.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                2.	Confidentiality
              </PolicySectionHeader>
              <p>
                2.1 We place strict controls over our team’s access to internal data and are
                committed to ensuring that your data is never seen by anyone who should not see it.
              </p>
              <p>
                2.2 The number of our technical employees with sufficient system permissions to
                enable them to access and control software that stores and secures your data is kept
                purposefully small so as to limit the chances of unwanted and improper access.
                These employees will only view customer data when it is necessary to do so according
                to the Privacy Policy and applicable legal provisions or permissions.
              </p>
              <p>
                2.3 All of our employees and contractors are bound to our policies regarding
                customer data and we treat these issues as matters of the highest importance.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                Notes
              </PolicySectionHeader>
              <p>
                If you are using Isegoria in a workplace, place of study, or on a device or account
                issued to you through your employment, studentship, or other relationship with an
                institution, you will invariably be bound by other policies regarding use and
                storage, access, modification, deletion and retention of communications and content.
                Please check with any relevant body or administrator about what policies they have
                in place in this regard.
              </p>
              <p>
                If you have additional questions regarding data privacy, security or
                confidentiality, we’d be happy to answer them. Please contact us as
                <a href="mailto:security@eulersbridge.com" target="_blank" rel="noopener noreferrer">security@eulersbridge.com</a>
                with queries or concerns or to report any vulnerability you believe exists on
                Isegoria or our website.
              </p>
            </PolicySection>

            <PolicySection>
              <p>
                This statement is effective and correct as of 1<super>st</super> January 2015.
              </p>
            </PolicySection>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Security;
