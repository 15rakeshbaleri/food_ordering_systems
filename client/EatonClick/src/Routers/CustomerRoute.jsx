import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import Resturant_details from "../Component/Restaurant/Resturant_details";
import Cart from "../Component/Cart/Cart";
import Profile from "../Component/Profile/Profile";
function CustomerRoute() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route
          path="/resturant/:city/:title/:id"
          element={<Resturant_details />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default CustomerRoute;
