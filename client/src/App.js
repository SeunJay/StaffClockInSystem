import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
      </Switch>
    </Router>
  );
};

export default App;
