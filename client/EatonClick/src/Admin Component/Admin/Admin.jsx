import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "../Admin/AdminSidebar";
import Dashboard from "../Dashboard/Dashboard";
import Orders from "../Orders/Orders";
import Menu from "../Menu/Menu";
import Foodcategory from "../Food_categor/Foodcategory";
import Ingredients from "../Ingredients/Ingregients";
import Events from "../Events/Events";
import CreateMenuform from "../Menu/CreateMenuform";
import Details from "../details/Details";
import CreateFoodcategory from "../Food_categor/CreateFoodcategory";
function Admin() {
  const handleClose = () => {};

  return (
    <div className="lg:flex justify-between h-screen">
      <div className="sticky top-0 h-screen lg:w-[20%]">
        <AdminSidebar handleClose={handleClose} />
      </div>

      <div className="lg:w-[80%] w-full h-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/category" element={<Foodcategory />} />
          <Route path="/createcategory" element={<CreateFoodcategory />} />
          <Route path="/addmenu" element={<CreateMenuform />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/events" element={<Events />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;
