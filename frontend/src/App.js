import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;