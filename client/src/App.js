import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AllStaff from './components/staff-collection/AllStaff';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={AllStaff} />
      </Switch>
    </Router>
  );
};

export default App;
