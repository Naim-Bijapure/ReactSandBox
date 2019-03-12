import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import './App.css';
import N from './components/N';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/N" component={N} />

  </Switch>
);

export default App;
