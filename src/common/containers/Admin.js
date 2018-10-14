import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import * as AuthActions from '../actions/auth';

import AdminNavBar from '../components/AdminNavBar';

import { Content } from './Home';

// ##TODO## :: Migrate to styled-components
import './Fonts.css';
import './App.css';

const AdminContent = styled.div`
  padding-top: 60px; /* ##TODO## :: Make export in nav */
`;
const ContentSet = styled.ul`
  margin: 0;
  padding: 0;
`;
const ContentItem = styled.li``;

class Admin extends React.Component {
  render() {
    const { content, logout } = this.props;

    return (
      <Content>
        <AdminNavBar logout={logout}/>
        <AdminContent>
        {
          Object.keys(content).map(contentType =>
            <ContentSet key={`cs-${contentType}`}>
              <h2>{contentType}</h2>
              {
                content[contentType].map((item, i) =>
                  <ContentItem key={`ci-${contentType}-${i}`}>
                    {JSON.stringify(item)}
                  </ContentItem>
                )
              }
            </ContentSet>
          )
        }
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
