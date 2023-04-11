import React from 'react'
import './App.css';
import HeaderCompoent from "./pages/Header/HeaderCompoent";
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HeaderCompoent />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
