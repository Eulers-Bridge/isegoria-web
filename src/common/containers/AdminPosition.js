import React from 'react';
import { connect } from 'react-redux';

// import * as ElectionActions from '../actions/elections';

import ContentItem from '../components/ContentItem';

class AdminPosition extends React.Component {
  // componentDidMount() {
  //   const { dispatch, elections } = this.props

  //   elections.map(election => {
  //     return Promise.all([
  //       dispatch(ElectionActions.fetchCandidates({ election })),
  //       dispatch(ElectionActions.fetchTickets({ election }))
  //     ])
  //   });
  // }

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
