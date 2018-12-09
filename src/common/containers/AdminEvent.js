import React from 'react';

import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

class AdminEvent extends React.Component {
  render() {
    const {
      events,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayEvents = id
      ? events.filter(event => `${event.eventId}` === id)
      : events;

    return (
      displayEvents.map(event =>
        <ContentItem
          contentType="event"
          item={event}
          key={`c-events-event-${event.eventId}`} />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.content.event
  }
}

export default connect(mapStateToProps)(AdminEvent);
