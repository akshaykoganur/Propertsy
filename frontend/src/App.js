import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import SellForm from "./pages/SellForm";
import RentForm from "./pages/RentForm";
import HostelForm from "./pages/HostelForm";
import ViewSell from "./pages/ViewSell";
import ViewRent from "./pages/ViewRent";
import ViewHostel from "./pages/ViewHostel";
import Profile from "./pages/Profile";
import Hostel from "./pages/Hostel";
import ViewBuyProperties from "./pages/ViewBuyProperties";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/submitSell" element={<SellForm />} />
          <Route path="/submitRent" element={<RentForm />} />
          <Route path="/submitHostel" element={<HostelForm />} />
          <Route path="/viewSell" element={<ViewSell />} />
          <Route path="/viewRent" element={<ViewRent />} />
          <Route path="/viewHostel" element={<ViewHostel />} />
          <Route path="/viewBuyProperty" element={<ViewBuyProperties />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;