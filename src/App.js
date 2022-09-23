import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import VendingMachine from './VendingMachine';
import Snickers from './Snickers';
import Twinkie from './Twinkie';
import Chips from './Chips';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/snickers" element={<Snickers />} />
          <Route exact path="/twinkie" element={<Twinkie />} />
          <Route exact path="/chips" element={<Chips />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
