import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import EventForm from '../components/EventForm';
import ContentItem from '../components/ContentItem';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 8px;
`;

export const StyledFab = styled(Fab)`
  && {
    bottom: 16px;
    position: fixed;
    right: 16px;
  }
`;

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
          <StyledFab
            aria-label="Add"
            color="primary"
            key="add-event"
            onClick={
              () => window.location.href += '/create'
            }
            variant="extended"
          >
            <StyledAddIcon />
            Add Event
          </StyledFab>
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
