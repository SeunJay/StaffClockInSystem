import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AddStaff from './components/add-staff/AddStaff';
import AllStaff from './components/staff-collection/AllStaff';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={AllStaff} />
        <Route exact path='/add-new-staff' component={AddStaff} />
      </Switch>
    </Router>
  );
};

export default App;
