import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Flights from './pages/Flights';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/search/:departure/:destination" component={Flights} />
        </Switch>
      </div>
    );
  }
}

export default App;
