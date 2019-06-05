import React from 'react';

import { Link } from 'react-router-dom';

const TicketItem = ({ item }) => {
  console.log(item);

  return (
    <div>
      <Link to={`/admin/tickets/${item.ticketId}`}>
        {item.name}
      </Link>
    </div>
  )
};

export default TicketItem;
