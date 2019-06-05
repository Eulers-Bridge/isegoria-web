import React from 'react';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
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
      <AddButton contentType="Photo" />
    ]);
  }
}

function mapStateToProps(state) {
  return {
    photos: state.content.photo
  }
}

export default connect(mapStateToProps)(AdminPhoto);
