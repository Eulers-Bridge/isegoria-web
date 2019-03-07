import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 8px;
`;

export const StyledFab = styled(Fab)`
  && {
    bottom: 16px;
    position: fixed;
    right: 16px;
  }
`;

class AdminPhoto extends React.Component {
  render() {
    const {
      photos,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayPhotos = id
      ? photos.filter(photo => `${photo.nodeId}` === id)
      : photos;

    return ([
      <div key="items">
      {
        displayPhotos.map(photo =>
          <ContentItem
            contentType="photo"
            item={photo}
            key={`c-photos-photo-${photo.nodeId}`} />
        )
      }
      </div>,
      <StyledFab
        aria-label="Add"
        color="primary"
        key="add-photo"
        onClick={
          () => window.location.href += '/create'
        }
        variant="extended"
      >
        <StyledAddIcon />
        Add Photo
      </StyledFab>
    ]);
  }
}

function mapStateToProps(state) {
  return {
    photos: state.content.photo
  }
}

export default connect(mapStateToProps)(AdminPhoto);
