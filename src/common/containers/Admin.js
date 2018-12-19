import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import * as AuthActions from '../actions/auth';

import AdminArticle from './AdminArticle';
import AdminDashboard from './AdminDashboard';
import AdminEvent from './AdminEvent';
import AdminPhoto from './AdminPhoto';
import AdminPoll from './AdminPoll';

import AdminNav from '../components/AdminNav';

import { Content } from './Home';

// ##TODO## :: Migrate to styled-components
import './Fonts.css';
import './App.css';

const AdminContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 240px; /* ##TODO## :: Make export in nav? Do better? */
  padding-top: 60px; /* ##TODO## :: Make export in nav */

  @media screen and (max-width: 960px) {
    padding-left: 0;
  }

  h2 {
    margin: 1rem auto 1.5rem auto;
    text-align: center;
  }
`;

const AdminFeed = styled.div`
  width: 100%;
`;

class Admin extends React.Component {
  render() {
    const { logout } = this.props;

    return (
      <Content>
        <AdminNav
          logout={logout} />

        <AdminContent>
          <AdminFeed>
            <Switch>
              <Route path="/admin/articles/:id?" component={AdminArticle} />
              <Route path="/admin/events/:id?" component={AdminEvent} />
              <Route path="/admin/photos/:id?" component={AdminPhoto} />
              <Route path="/admin/polls/:id?" component={AdminPoll} />
              <Route path="/" component={AdminDashboard} />
            </Switch>
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
