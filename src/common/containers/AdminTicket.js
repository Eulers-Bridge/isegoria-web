import React from 'react';
import { connect } from 'react-redux';

import AddButton from '../components/AddButton';
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
      <React.Fragment>
        {
          displayTickets.map(ticket =>
            <ContentItem
              contentType="ticket"
              item={ticket}
              key={`c-tickets-ticket-${ticket.nodeId}`} />
          )
        }
        <AddButton contentType="Ticket" />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.elections.ticket
  }
}

export default connect(mapStateToProps)(AdminTicket);
