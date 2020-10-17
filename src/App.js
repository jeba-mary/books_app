import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact paht="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
