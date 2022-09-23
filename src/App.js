import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import VendingMachine from './VendingMachine';
import Snickers from './Snickers';
import Twinkie from './Twinkie';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
        <Route exact path="/twinkie">
          <Twinkie />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
