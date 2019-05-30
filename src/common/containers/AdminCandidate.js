import React from 'react';
import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

class AdminCandidate extends React.Component {
  render() {
    const {
      candidates,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayCandidates = id
    ? candidates.filter(candidate => `${candidate.candidateId}` === id)
    : candidates;

    return (
      displayCandidates.map(candidate =>
        <ContentItem
          contentType="candidate"
          item={candidate}
          key={`c-candidates-candidate-${candidate.nodeId}`} />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    candidates: state.elections.candidate
  }
}

export default connect(mapStateToProps)(AdminCandidate);
