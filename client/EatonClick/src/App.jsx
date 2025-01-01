import { darkTheme } from "./Theme/Darktheme";
import React, { useEffect } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Routers from "./Routers/Routers";
import { GETUser } from "./Component/State/Authentication/Action";
import { useSelector, useDispatch } from "react-redux";
import { findCart } from "./Component/State/cart/Action";
function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (jwt && !auth.user) {
      dispatch(GETUser(jwt));
      dispatch(findCart(jwt));
    }
  }, [jwt, auth.user]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
