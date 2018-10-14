import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledAdminSideBar = styled.div`
  background: #e8e8eb;
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: fixed;
  top: 60px; /* ##TODO## :: Make export in nav */
  width: 160px;

  /* ##TODO## :: Convert to burger for mobile */
  @media screen and (max-width: 767px) {
    display: none;
  }

  h2 {
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const AdminSidebarSection = styled.ul`
  margin: 0 0 2rem 0;
  padding: 0;
`;

const AdminSideBarLink = styled.li`
  color: #222;
  font-weight: normal;
  list-style: none;
  margin-bottom: 0.25rem;
  text-indent: 1rem;

  a {
    color: #222;
    font-weight: normal;
  }
`;

// ##TODO## :: Move to somewhere good and import
const CONTENT_TYPES = {
  articles: {
    slug: 'articles',
    title: 'Articles'
  },
  events: {
    slug: 'events',
    title: 'Events'
  },
  polls: {
    slug: 'polls',
    title: 'Polls'
  },
  photos: {
    slug: 'photos',
    title: 'Photos'
  }
}

const AdminSideBar = ({ logout }) => {
  return (
    <StyledAdminSideBar>
      <AdminSidebarSection>
        <h2>News Feed</h2>
        {
          Object.keys(CONTENT_TYPES).map(contentType => {
            const { slug, title } = CONTENT_TYPES[contentType];

            return (
              <AdminSideBarLink key={`asb-ct-${slug}`}>
                <Link to={`/admin/${slug}`}>{title}</Link>
              </AdminSideBarLink>
            );
          })
        }
      </AdminSidebarSection>

      <AdminSidebarSection>
        <h2>Account</h2>
        <AdminSideBarLink>
          <Link to="/admin/account">Account</Link>
        </AdminSideBarLink>
        <AdminSideBarLink>
          <Link to="/admin/profile">My Profile</Link>
        </AdminSideBarLink>
        <AdminSideBarLink>
          <Link
            to="/admin"
            onClick={logout}>
            Logout
          </Link>
        </AdminSideBarLink>
      </AdminSidebarSection>
    </StyledAdminSideBar>
  )
}

export default AdminSideBar;
