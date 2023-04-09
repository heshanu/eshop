import React from 'react'
import './App.css';
import HeaderCompoent from "./pages/Header/HeaderCompoent";
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderCompoent />
      <BrowserRouter>
        <Routes path="/">
          <Route index path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
