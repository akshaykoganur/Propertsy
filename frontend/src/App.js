import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Rent from "./pages/Rent";
import SellForm from "./pages/SellForm";
import RentForm from "./pages/RentForm";
import Profile from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/submitSell" element={<SellForm />} />
          <Route path="/submitRent" element={<RentForm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;