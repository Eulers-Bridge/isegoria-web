import React from 'react';
// import styled from 'styled-components';
// import utils from '../../utils';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const UserList = ({ users }) => {
  console.log(users);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Region</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
      {
        users && users.map((user, i) =>
          <TableRow key={i}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.region}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        )
      }
      </TableBody>
    </Table>
  )
}

export default UserList;
