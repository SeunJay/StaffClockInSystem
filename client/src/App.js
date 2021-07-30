import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AddStaff from './components/add-staff/AddStaff';
import UpdateStaff from './components/update-staff/UpdateStaff';
import Table from './components/table/Table';
import AllStaff from './components/staff-collection/AllStaff';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={AllStaff} />
        <Route exact path='/add-new-staff' component={AddStaff} />
        <Route exact path='/edit-staff/:id' component={UpdateStaff} />
        <Route exact path='/staff-in-and-out' component={Table} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </Router>
  );
};

export default App;
