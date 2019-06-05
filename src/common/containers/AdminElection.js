import React from 'react';
import { connect } from 'react-redux';

import * as ElectionActions from '../actions/elections';

import AddButton from '../components/AddButton';
import ContentItem from '../components/ContentItem';

class AdminElection extends React.Component {
  componentDidMount() {
    const { dispatch, elections } = this.props

    elections.map(election => {
      return Promise.all([
        dispatch(ElectionActions.fetchCandidates({ election })),
        dispatch(ElectionActions.fetchPositions({ election })),
        dispatch(ElectionActions.fetchTickets({ election }))
      ])
    });
  }

  render() {
    const {
      elections,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayElections = id
      ? elections.filter(election => `${election.nodeId}` === id)
      : elections;

    return (
      <React.Fragment>
        {
          displayElections.map(election =>
            <ContentItem
              contentType="election"
              item={election}
              key={`c-elections-election-${election.nodeId}`} />
          )
        }
        <AddButton contentType="Election" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    elections: state.elections.election
  }
}

export default connect(mapStateToProps)(AdminElection);
