import React from 'react';
import './App.scss';


import PublicLayout from './Layout/Public/public';
import PrivateLayout from './Layout/Private/private';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/admin" component={PrivateLayout} />
          <Route path="/" component={PublicLayout} />
      </Switch>
    </div>
  );
}

export default App;
