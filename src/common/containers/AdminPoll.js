import React from 'react';

import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';
import PollForm from '../components/PollForm';

import { StyledAddIcon, StyledFab } from './AdminArticle';

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
        : [
            displayPolls.map(poll =>
            <ContentItem
              contentType="poll"
              item={poll}
              key={`c-polls-poll-${poll.nodeId}`} />
          ),
          <StyledFab
            aria-label="Add"
            color="primary"
            onClick={
              () => window.location.href += '/create'
            }
            variant="extended"
          >
            <StyledAddIcon />
            Add Poll
          </StyledFab>
        ]
    );
  }
}

function mapStateToProps(state) {
  return {
    polls: state.content.poll
  }
}

export default connect(mapStateToProps)(AdminPoll);
