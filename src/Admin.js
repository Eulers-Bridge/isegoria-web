import React from 'react';
import logo from './react.svg';
import './Admin.css';

class Admin extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Admin</h2>
        </div>
        <p className="Home-intro">
          Admin yo
        </p>
      </div>
    );
  }
}

export default Admin;
