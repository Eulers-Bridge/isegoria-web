import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

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

    return (
      displayPhotos.map(photo =>
        <ContentItem
          contentType="photo"
          item={photo}
          key={`c-photos-photo-${photo.nodeId}`} />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.content.photo
  }
}

export default connect(mapStateToProps)(AdminPhoto);
