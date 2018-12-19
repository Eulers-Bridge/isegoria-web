import React from 'react';
import { connect } from 'react-redux';

import ContentItem from '../components/ContentItem';

class AdminTicket extends React.Component {
  render() {
    const {
      tickets,
      match: { params }
    } = this.props;
    const { id } = params;
    const displayTickets = id
      ? tickets.filter(ticket => `${ticket.nodeId}` === id)
      : tickets;

    return (
      displayTickets.map(ticket =>
        <ContentItem
          contentType="ticket"
          item={ticket}
          key={`c-tickets-ticket-${ticket.nodeId}`} />
      )
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.elections.ticket
  }
}

export default connect(mapStateToProps)(AdminTicket);
