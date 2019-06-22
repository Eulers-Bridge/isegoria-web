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

const PolicySectionSubHeader = styled.h4`
  font-size: 90%;
  margin: 16px 0;
`;

class Terms extends React.Component {
  render() {
    return (
      <Content className="content">
        <NavBar dark />

        <PolicyHeader>
          <div className="container">
            <strong>
              <h1>Isegoria Terms of Use</h1>
            </strong>
            <h2>Effective 1st January 2015</h2>
            <p>
              Please read these terms very carefully before signing up to Isegoria or using our
              website. By using our website and application you agree to be bound by these terms of
              use. If you do not accept any element of these terms you must not access or use our
              website, application or services.
            </p>
          </div>
        </PolicyHeader>

        <section className="page">
          <div className="container">
            <PolicySection>
              <PolicySectionHeader>
                1.	Website and App
              </PolicySectionHeader>
              <p>
                The website <a href="https://isegoria.app" target="_blank" rel="noopener noreferrer">isegoria.app</a>
                (<strong>“Website”</strong>) and application (<strong>“app”</strong> or
                <strong>“Isegoria”</strong>) is operated by <em>Eulers Bridge Pty Ltd A.C.N.</em>
                168 806 497 of Level 3, Old Metallurgy Building, University of Melbourne, Victoria
                3010, AUSTRALIA, references to which are made as such: <strong>“Euler’s Bridge”,
                “the team”, “we”, “us” or “our”.</strong> These terms and conditions
                (<strong>“Terms of Use”</strong>) apply to your use of our Website and app, as well
                as information, documents, logos, graphics, images, photographs, videos and other
                material (<strong>“Material”</strong>) available on our Website or app. These Terms
                of Use include our Privacy Policy and any other terms and conditions which appear on
                our Website or in our app. You must at all times comply with these Terms of Use, any
                directions given by us, and all applicable laws when using our Website and app.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                2.	Use of Website and app
              </PolicySectionHeader>
              <p>
                The Material available on our Website and app is:
              </p>
              <ol type="i">
                <li>
                  general in nature and made available for information purposes only; and
                </li>
                <li>
                  not intended to be relied upon as advice for any particular purpose.  You must not
                  use any of the Material available on our Website or app for any commercial purpose
                  without our prior written approval.
                </li>
              </ol>

              <p>
                You must not:
              </p>
              <ol type="i">
                <li>
                  copy, reproduce, adapt, modify, distribute, republish, download, display,
                  communicate or transmit in any form or by any means any Material available on our
                  Website or app, or any part of our Website or app, without our prior written
                  approval except to the extent expressly permitted by these Terms of Use;
                </li>
                <li>
                  interfere with or disrupt the use of our Website or app by other users;
                </li>
                <li>
                  interfere with or breach any security or authentication measures of our Website or
                  app;
                </li>
                <li>
                  use data mining, screen scraping or similar technologies to extract data from our
                  Website or app without our prior written approval;
                </li>
                <li>
                  use our Website or app to distribute any virus or other harmful code;
                </li>
                <li>
                  use our Website or app to engage in any fraudulent or illegal activity or any
                  other activity that we determine in our sole discretion to be inappropriate or
                  unsuitable; or
                </li>
                <li>
                  use our Website or app in a way that may damage or adversely affect our reputation
                  or goodwill or the reputation or goodwill of other users of our Website or app.
                </li>
                <li>
                  use our Website or app, where applicable, in a way that might damage or adversely
                  affect the reputation or goodwill of the associated institution with which we
                  undertake to develop contractual or other relations.
                </li>
              </ol>
              <p>
                We may update our Website or app at any time, which may affect your ability to
                continue to access or use our Website, or app, or the Material available on our
                Website or app.
              </p>

              <PolicySectionSubHeader>
                2.1 Evolution of Business
              </PolicySectionSubHeader>
              <p>
                As Isegoria and other elements of Euler’s Bridge evolve, we may change these terms
                of use from time to time. If we make any changes which materially affect users, we
                will of course provide reasonable notice to all affected users either (i) by email,
                (ii) by posting a notice on our website or app, (iii) by writing to users, or (iv)
                by a combination of 2.1(i)-(iii).
              </p>
              <p>
                This will provide affected users with an opportunity to withdraw from using our
                products or accessing our website or other service or materials before the new terms
                of use come into effect. The date of effect will be displayed clearly both on the
                website or through one or a combination of the channels outlined in 2.1(i)-(iv)
                above.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                3.	Age of Users
              </PolicySectionHeader>
              <p>
                By accessing or using our website or app you affirm that you are at least 18 years
                of age (or have reached the age of majority applicable to you in your situated
                jurisdiction at any time of use or access, if that is not 18). You also affirm by
                representation that you are fully able and competent to enter into and comply with
                the terms and conditions contained herein. Isegoria is not, at present, configured
                for use by children aged under-13 and individuals aged under-13 should not access or
                use any of our services or our website or app. User accounts found to be in breach
                of this term will be suspended or de-activated from Isegoria without notice.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                4.	Description of Service
              </PolicySectionHeader>
              <p>
                The services and platform provided by Isegoria (“services” or “our app”,
                inclusively) include:
              </p>
              <ol type="i">
                <li>
                  Real-time communication, polling, voting reminder, search and social relationship
                  and related systems and technologies, as well as the website
                  <a href="https://isegoria.app" target="_blank" rel="noopener noreferrer">https://isegoria.app</a>, and our
                  related mobile applications, and
                </li>
                <li>
                  all software (including the Software, as defined below), applications, data,
                  reports, text, images, and other content made available through any of the
                  foregoing.
                </li>
              </ol>
              <p>
                Any new features added to or augmenting the Service are also subject to this ToU.
                Euler’s Bridge reserves the right to modify or discontinue the Service or any
                feature or functionality thereof at any time as part of the evolution of the
                business.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                5.	Intellectual property rights
              </PolicySectionHeader>
              <p>
                All intellectual property rights (including copyright and trade mark rights) and
                other rights in our Website, app and Material available on our Website or app are
                owned or licensed by us.  If you download or print any of the Material then you must
                ensure that the Material is appropriately attributed to us and you must otherwise
                comply with these Terms of Use.
              </p>
              <p>
                You agree that we will own all Intellectual Property Rights in any suggestions,
                ideas, enhancement requests, feedback or recommendations that you provide to us in
                relation to our Website, or app, or any Material available on our Website or app.
                You grant to us an irrevocable, perpetual, non-exclusive, royalty-free, world-wide
                licence (including the right to sub-licence) to use, copy, modify, display,
                distribute and communicate to the public any Material which you share or post on our
                Website or to our app, or otherwise make available to us for any purpose relating to
                our Website or app.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                6.	Personal information
              </PolicySectionHeader>
              <p>
                You must not provide to us any personal information about another individual for any
                purpose unless you have obtain his or her express consent and notified him or her of
                all details required by any applicable privacy law.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                7.	Consent to Use of Data.
              </PolicySectionHeader>
              <p>
                To facilitate product support, product development and improvement as well as
                provide other services to you, you agree that Euler’s Bridge may use cookies, web
                beacons and other analytic technologies to collect, use, store and transmit
                technical and related information regarding your mobile device (including MAC
                Address and/or unique device id or UDID), IP address, geo-location, device make and
                model, operating system, software and applications, including application usage
                data.
              </p>
              <p>
                In addition, Euler’s Bridge may collect, store, use and transmit app use data, third
                party account authorization data, session data, browser identifiers, connection
                type, carrier information as well as online and app usage and other purchase
                metrics, statistics and/or analytics.  Euler’s Bridge may use this information alone
                and in combination with information you provide to Euler’s Bridge directly (if any)
                to help us develop and improve Isegoria and the user experience of Isegoria.
              </p>
              <p>
                For data collected by or transferred to Euler’s Bridge, this is treated under our
                Privacy Policy which can be found at www.isegoria.com.au/privacy.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                8.	Consent to Public Display of Data
              </PolicySectionHeader>
              <p>
                Euler’s Bridge may also collect, use, store, transmit and publicly display
                statistical data regarding app use (including scores, networks, and relevant
                achievements), or identify content that is created and shared by you with other
                users.  All data that personally identifies you is collected, used, stored and
                transmitted in accordance with our Privacy Policy which can be found at
                <a href="https://isegoria.app/privacy">isegoria.app/privacy</a>
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                9.	Website and app links
              </PolicySectionHeader>
              <p>
                We make no warranties or representations of any kind whatsoever as to any
                information, documents, logos, graphics, images, photographs, videos or other
                material available on any external website linked to from our Website or app.
                You access and use any such external website or app at your own risk.  Your use of
                any such external website or app is governed by its terms of use.
              </p>
              <p>
                You may link to our Website or to a relevant download or information link for our
                app, provided that the link accurately indicates that it is to our Website or app
                and we have not requested you to remove the link where we have determined in our
                sole discretion that it is misleading or otherwise inappropriate.  If you do not
                immediately comply with a request by us to remove a link to our Website or app then
                you must indemnify us against any and all costs, charges or expenses (including,
                without limitation, legal costs on a full indemnity basis) that we incur in having
                any such link removed.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                10.	Role of Administrative Users
              </PolicySectionHeader>
              <p>
                Users and other customers should be aware that Administrative (“Admin”) User(s) –
                (a) designated individual(s) within the institution or representative body with whom
                we contract Isegoria or other services – may have certain rights over some or all
                user accounts. Such Admin User(s) set local policies regarding use of Isegoria,
                including retention settings and the ability to access communication or other uses
                of the users’ accounts within their reach. Please see the Privacy Policy for more
                information in this respect.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                11.	Disclaimer
              </PolicySectionHeader>
              <p>
                You use our Website, app, and the Material available on our Website or app at your
                own risk on an “as is” and “as available basis”.  We do not give any warranty or
                representation in respect of our Website, app, or the Material available on our
                Website or app, including, without limitation, any warranty or representation that:
              </p>
              <ol type="i">
                <li>
                  your use of our Website or app will be error‑free or uninterrupted;
                </li>
                <li>
                  our Website or app or the Material will be free from viruses or other harmful code;
                </li>
                <li>
                  the Material is accurate, complete, current or reliable; or
                </li>
                <li>
                  the Material will be available at any time.
                </li>
              </ol>
              <p>
                To the full extent permitted by law, any condition, warranty or representation which
                would otherwise be implied (whether by any law or otherwise) in these Terms of Use
                is expressly excluded including without limitation, any warranties of
                merchantability, fitness for a particular purpose or non-infringement.  Where any
                condition, warranty or representation is implied (whether by any law or otherwise)
                in these Terms of Use which cannot lawfully be excluded then our liability for any
                breach of such condition, warranty or representation will be limited, at our option,
                to providing the services again or otherwise to the full extent permitted by law.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                12.	Limitation of liability
              </PolicySectionHeader>
              <p>
                To the full extent permitted by law, we will have no liability (whether in contract,
                in tort, under statute or in any other way and whether due to negligence or any
                other cause) to you for or in respect of any and all claims, actions, demands,
                proceedings, losses, damages, costs, charges, expenses or liabilities of any kind or
                nature whatsoever (including, without limitation, consequential, special or indirect
                losses, damages, costs, charges, expenses or liabilities) directly or indirectly
                arising out of or in connection with Isegoria or any other products or services on
                our Website.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                13.	Indemnity
              </PolicySectionHeader>
              <p>
                To the full extent permitted by law you irrevocably and unconditionally agree to
                indemnify us from and against any and all claims, actions, demands, proceedings,
                losses, damages, costs, charges, expenses or liabilities of any kind or nature
                whatsoever (including, without limitation, legal costs on a full indemnity basis)
                directly or indirectly arising out of, or in connection with:
              </p>
              <ol type="i">
                <li>any breach by you of these Terms of Use;</li>
                <li>your use of our Website; or</li>
                <li>your use of Isegoria.</li>
              </ol>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                14.	Termination, suspension and restriction
              </PolicySectionHeader>
              <p>
                We may at any time terminate, suspend or restrict your use of our Website or app
                without notice for any reason including, without limitation, if you breach these
                Terms of Use.
              </p>
              <p>
                Any provision of these Terms of Use which is capable of having effect after
                termination of these Terms of Use will survive and remain in full force and effect
                following such termination.  The termination of these Terms of Use for any reason
                does not extinguish or otherwise affect any accrued rights or remedies of a party.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                15.	Entire agreement and amendments
              </PolicySectionHeader>
              <p>
                These Terms of Use constitute the entire agreement between you and us in connection
                with their subject matter.  We may in our sole discretion amend these Terms of Use
                at any time by publishing amended Terms of Use on our Website or app.  By continuing
                to use our Website or app you will be deemed to accept and agree to be bound by the
                amended Terms of Use.  You should regularly review the most recent version of these
                Terms of Use available on our Website at www.isegoria.com.au/terms.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                16.	Assignment and transfer
              </PolicySectionHeader>
              <p>
                We may at any time, by notifying you, assign or otherwise transfer our rights and
                obligations under these Terms of Use to third parties including to a purchaser of
                all or part of our Website, app, part of our Website or app, or our business, and
                provide to the purchaser any or all Material which you have shared or posted on our
                Website or app or otherwise made available to us for the purposes of our Website or
                app, including personal information.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                17.	Waiver and severability
              </PolicySectionHeader>
              <p>
                Any failure by us to exercise any right or remedy under these Terms of Use will not
                constitute a waiver of that right or remedy or any other right or remedy.  If any
                provision of these Terms of Use is invalid or unenforceable then such provision will
                be severed without affecting the validity of the remaining provisions.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                18.	Complaints and disputes
              </PolicySectionHeader>
              <p>
                We are committed to dealing with complaints fairly and resolving issues in
                accordance with our complaints handling processes and any relevant regulatory
                standards.
              </p>
              <p>
                If you a have a complaint about our Services, or believe your account may be subject
                to unauthorised transaction, account takeover or other type of fraud activity, you
                should contact us immediately.
              </p>
              <p>
                You can report complaints about the Services, the Website or the app by email to us
                at
                <a href="mailto:support@eulersbridge.com" target="_blank" rel="noopener noreferrer">
                  support@eulersbridge.com
                </a>
              </p>
              <p>
                We aim to:
              </p>
              <ol type="i">
                <li>
                  acknowledge receipt of all complaints within 5 business days; and
                </li>
                <li>
                  resolve all complaints within 45 businesss days.  This may not be possible in all
                  circumstances.
                </li>
              </ol>
              <p>
                Where we cannot resolve a complaint within 45 business days, we will notify you of
                the reason for the delay as well as an indication of when we expect to resolve the
                complaint.
              </p>
              <p>
                Any controversy or claim at law or equity may be adjudicated by a court of competent
                jurisdiction located in Victoria, Australia.  You agree to submit to a jurisdiction
                of the courts located in Victoria.
              </p>
              <p>
                We may consider use of other alternative forms of dispute resolution, such as
                binding or non-binding mediation to be held in Victoria Australia another location
                mutually agreed upon by the parties.
              </p>
            </PolicySection>

            <PolicySection>
              <PolicySectionHeader>
                19.	Governing Law and Jurisdiction
              </PolicySectionHeader>
              <p>
                These Terms of Use are governed by and construed in accordance with the laws of the
                State of Victoria, Australia.  The courts of the State of Victoria, Australia will
                have exclusive jurisdiction in respect of any dispute arising out of or in
                connection with these Terms of Use.
              </p>
              <p>
                Note: If you reside in a Member State of the European Union:
              </p>
              <ol type="i">
                <li>
                  the laws of England and Wales, excluding its conflicts-of-law rules, govern your
                  use of the Website and app; and
                </li>
                <li>
                  you expressly agree that exclusive jurisdiction for any claim or action arising
                  out of or relating to your use shall be the Courts of England and Wales, and you
                  expressly consent to the exercise of personal jurisdiction of such courts.
                </li>
              </ol>
              <p>
                Please note that your conduct may also be subject to other local, state, national,
                and international laws.
              </p>
            </PolicySection>

            <PolicySection>
              <p>
                These Terms of Use are effective as of 1<super>st</super> January 2015.
              </p>
            </PolicySection>
          </div>
        </section>

        <Footer />
      </Content>
    );
  }
}

export default Terms;
