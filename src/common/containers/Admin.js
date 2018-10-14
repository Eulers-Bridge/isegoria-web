import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import * as AuthActions from '../actions/auth';

import AdminNavBar from '../components/AdminNavBar';
import AdminSideBar from '../components/AdminSideBar';
import ContentItem from '../components/ContentItem';
import ContentSetControls from '../components/ContentSetControls';
import Loading from '../components/Loading';

import { Content } from './Home';

// ##TODO## :: Migrate to styled-components
import './Fonts.css';
import './App.css';

const AdminContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 160px; /* ##TODO## :: Make export in nav? Do better? */
  padding-top: 60px; /* ##TODO## :: Make export in nav */

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }

  h2 {
    margin: 1rem auto 1.5rem auto;
    text-align: center;
  }
`;
const AdminFeed = styled.div``;
const ContentSet = styled.div`
  margin: 6rem 0;
  padding: 0;

  &:first-child {
    margin-top: 2rem;
  }
`;

class Admin extends React.Component {
  render() {
    const { content, logout } = this.props;

    return (
      <Content>
        <AdminNavBar
          logout={logout}
          title="Admin" />
        <AdminContent>
          <AdminSideBar
            logout={logout} />
          <AdminFeed>
          {
            Object.keys(content).map(contentType =>
              <ContentSet key={`cs-${contentType}`}>
                <h2>Recent {contentType}</h2>
                {
                  content[contentType].length > 0 &&
                  content[contentType].map((item, i) =>
                    <ContentItem
                      item={item}
                      key={`ci-${contentType}-${i}`} />
                  )
                }
                {
                  !(content[contentType].length > 0) &&
                    <Loading />
                }
                <ContentSetControls contentType={contentType} />
              </ContentSet>
            )
          }
          </AdminFeed>
        </AdminContent>
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(AuthActions.attemptLogout())
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Admin);
