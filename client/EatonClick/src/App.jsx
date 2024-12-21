import { darkTheme } from "./Theme/Darktheme";
import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
