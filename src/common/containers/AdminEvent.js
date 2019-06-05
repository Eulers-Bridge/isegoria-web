import React from 'react';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
import EventForm from '../components/EventForm';
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
      id
        ? <EventForm event={displayEvents[0] || null} />
        : [
          displayEvents.map(event =>
            <ContentItem
              contentType="event"
              item={event}
              key={`c-events-event-${event.eventId}`} />
          ),
          <AddButton contentType="Event" />
        ]
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.content.event
  }
}

export default connect(mapStateToProps)(AdminEvent);
