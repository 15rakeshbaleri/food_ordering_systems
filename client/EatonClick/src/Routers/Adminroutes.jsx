import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../../src/Admin Component/Admin/Admin";
import CreateRestaurantForm from "../../src/Admin Component/CreateRestaurant/CreateRestauranat";
function Adminroutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={true ? <CreateRestaurantForm /> : <Admin />}
        ></Route>
      </Routes>
    </div>
  );
}

export default Adminroutes;
