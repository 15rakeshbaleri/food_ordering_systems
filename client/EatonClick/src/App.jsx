import { darkTheme } from "./Theme/Darktheme";
import React, { useEffect } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart";
import Resturant_details from "./Component/Restaurant/Resturant_details";
import Profile from "./Component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
import { GETUser } from "./Component/State/Authentication/Action";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    dispatch(GETUser(jwt || auth.jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar />
      <Home />
      <Resturant_details />
      <Cart />
      <Profile /> */}
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
