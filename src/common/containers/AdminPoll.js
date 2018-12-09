import React from 'react';

import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

class AdminPoll extends React.Component {
  render() {
    const {
      polls,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayPolls = id
      ? polls.filter(poll => `${poll.pollId}` === id)
      : polls;

    return (
      displayPolls.map(poll =>
        <ContentItem
          contentType="poll"
          item={poll}
          key={`c-polls-poll-${poll.pollId}`} />
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
