import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AddButton from '../components/AddButton';
import UserList from '../components/UserList';

import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';


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

class AdminArticle extends React.Component {
  render() {
    const {
      staff
    } = this.props;

    // ##TODO## :: Loading state
    return (
      <StyledUserFormGrid
        alignContent="flex-start"
        alignItems="center"
        container
        direction="column"
        spacing={4}
      >
        <h2>Administrators</h2>
        <p>Manage and invite new users with administrative permissions.</p>
        <hr />

        <UserList
          users={staff} />

        <AddButton contentType="Admin" />
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
