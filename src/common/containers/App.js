import React from 'react';

import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Home from './Home';
import About from './About';
import Admin from './Admin';
import Contact from './Contact';

import './Fonts.css';
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/admin" component={Admin} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default App;
