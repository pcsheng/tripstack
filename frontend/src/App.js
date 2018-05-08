import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
