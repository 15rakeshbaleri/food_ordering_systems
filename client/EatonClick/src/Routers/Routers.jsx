import React from "react";
import { Routes, Route } from "react-router-dom";
import Adminroutes from "./Adminroutes";
import CustomerRoute from "./CustomerRoute";
function Routers() {
  return (
    <Routes>
      <Route path="/admin/restaurants/*" element={<Adminroutes />}></Route>
      <Route path="/*" element={<CustomerRoute />}></Route>
    </Routes>
  );
}

export default Routers;
