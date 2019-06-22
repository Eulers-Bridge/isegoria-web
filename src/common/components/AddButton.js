import React from 'react';
import styled from 'styled-components';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

// const StyledAddIcon = styled(AddIcon)`
//   margin-right: 8px;
// `;
const StyledAddIcon = AddIcon;

const StyledFab = styled(Fab)`
  && {
    bottom: 16px;
    position: fixed;
    right: 16px;
  }
`;

const AddButton = props =>
  <StyledFab
    aria-label="Add"
    color="primary"
    key={`add-${props.contentType}`}
    onClick={
      () => window.location.href += '/create'
    }
    variant="extended"
    >
    <StyledAddIcon />
    Add {props.contentType}
  </StyledFab>;

export default AddButton;
