import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import UserList from '../components/UserList';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

import AddIcon from '@material-ui/icons/Add';

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 8px;
`;

const StyledUserFormGrid = styled(Grid)`
  color: #111;
  padding: 4rem;
  width: 100%;

  *>* {
    width: 100%;
  }

  input[type="submit"] {
    color: #f00;
  }
`;

export const StyledFab = styled(Fab)`
  && {
    bottom: 16px;
    position: fixed;
    right: 16px;
  }
`;

const InvitePage = styled.div`
  width: 100%;
`;

class AdminArticle extends React.Component {
  render() {
    const {
      match: { params },
      staff
    } = this.props;

    // ##TODO## :: Loading state
    return (
      <StyledUserFormGrid
        alignContent="flex-start"
        alignItems="center"
        container
        direction="column"
        spacing={32}
      >
        <h2>Administrators</h2>
        <p>Manage and invite new users with administrative permissions.</p>
        <hr />

        <UserList
          users={staff} />

        <StyledFab
          aria-label="Add"
          color="primary"
          key="add-article"
          onClick={
            () => window.location.href += '/create'
          }
          variant="extended"
        >
          <StyledAddIcon />
          Invite New Admin
        </StyledFab>
      </StyledUserFormGrid>
    );
  }
}

function mapStateToProps(state) {
  return {
    staff: state.staff
  }
}

export default connect(mapStateToProps)(AdminArticle);
