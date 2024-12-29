import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import Resturant_details from "../Component/Restaurant/Resturant_details";
import Cart from "../Component/Cart/Cart";
import Profile from "../Component/Profile/Profile";
import Paymentsuccess from "../Component/payment/Paymentsuccess";
import PaymentFailure from "../Component/payment/PaymentFailure";
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
        <Route path="/payment/success/:id" element={<Paymentsuccess />} />
        <Route path="/payment/failure" element={<PaymentFailure />} />
      </Routes>
    </div>
  );
}

export default CustomerRoute;
