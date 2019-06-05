import React from 'react';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
import ContentItem from '../components/ContentItem';

class AdminPosition extends React.Component {
  render() {
    const {
      positions,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayPositions = id
      ? positions.filter(position => `${position.positionId}` === id)
      : positions;

    return (
      <React.Fragment>
        {
          displayPositions.map(position =>
            <ContentItem
              contentType="position"
              item={position}
              key={`c-elections-position-${position.positionId}`} />
          )
        }
        <AddButton contentType="Position" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    positions: state.elections.position
  }
}

export default connect(mapStateToProps)(AdminPosition);
