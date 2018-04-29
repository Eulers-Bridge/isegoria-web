import React from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from './Home';
import Admin from './Admin';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default App;
