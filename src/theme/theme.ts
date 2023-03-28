import { createTheme } from "@mui/material/styles"

// Create a theme instance.
const theme = createTheme({
  // @ts-ignore
  shadows: ["none"],
  palette: {
    mode: "dark",
    background: {
      default: "#000A21"
    }
  },
  typography: {
    fontFamily: "Montserrat",
    body1: {
      color: "#FFFFFF"
    }
  }
});

export default theme;