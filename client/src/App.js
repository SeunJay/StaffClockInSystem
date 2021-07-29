import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <div className='App'>Hello World!</div>
      </Switch>
    </Router>
  );
};

export default App;
