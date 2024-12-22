import { darkTheme } from "./Theme/Darktheme";
import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Cart from "./Component/Cart/Cart";
import Resturant_details from "./Component/Restaurant/Resturant_details";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />

      <Cart />
    </ThemeProvider>
  );
}

export default App;
