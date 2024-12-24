import React from "react";
import Profilenavigation from "./Profilenavigation";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Userprofile from "./Userprofile";
import Orders from "./Orders";
import Address from "./Address";
import Favraiotes from "./Favraiotes";
import Events from "./Events";
const Profile = () => {
  const [opensidebar, setopensidebar] = useState(false);
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[80vh] lg:w-[20%]">
        <Profilenavigation />
      </div>
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="/" element={<Userprofile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favraiotes />} />
          <Route path="/address" element={<Address />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
