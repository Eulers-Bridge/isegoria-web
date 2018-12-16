import React from 'react';

import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';
import PollForm from '../components/PollForm';

class AdminPoll extends React.Component {
  render() {
    const {
      polls,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayPolls = id
      ? polls.filter(poll => `${poll.nodeId}` === id)
      : polls;

    return (
      id
        ? <PollForm poll={displayPolls[0] || null} />
        : displayPolls.map(poll =>
          <ContentItem
            contentType="poll"
            item={poll}
            key={`c-polls-poll-${poll.nodeId}`} />
        )
    );
  }
}

function mapStateToProps(state) {
  return {
    polls: state.content.poll
  }
}

export default connect(mapStateToProps)(AdminPoll);
