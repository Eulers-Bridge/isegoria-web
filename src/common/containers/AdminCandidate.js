import React from 'react';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
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
      <React.Fragment>
        {
          displayCandidates.map(candidate =>
            <ContentItem
              contentType="candidate"
              item={candidate}
              key={`c-candidates-candidate-${candidate.nodeId}`} />
          )
        }
        <AddButton contentType="Candidate" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    candidates: state.elections.candidate
  }
}

export default connect(mapStateToProps)(AdminCandidate);
