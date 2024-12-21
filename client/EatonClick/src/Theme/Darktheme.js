import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#5A20CB",
    },
    background: {
      main: "#00000",
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
    black: {
      main: "#0D0D0D",
    },
    textColor: {
      main: "#111111",
    },
  },
});
