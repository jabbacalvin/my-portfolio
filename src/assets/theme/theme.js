import { createTheme } from "@mui/material";
import typography from "./typography";

const baseTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1320,
      xl: 1920,
    },
  },
  navbarHeight: "70px",
  mobileNavbarHeight: "55px",
  typography,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontSize: "16px",
      },
      text: {
        letterSpacing: "2px",
        borderRadius: 0,
        "&:hover": {
          color: "rgb(230,230,230)",
          backgroundColor: "inherit",
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#1A1A1A",
      paper: "#bd3b22",
    },
    primary: {
      main: "#bd3b22",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#2C394B",
      contrastText: "#FFF",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#FFF",
  ...baseTheme,
});

const lightTheme = createTheme({
  palette: {
    background: {
      default: "#D6DAE6",
    },
    primary: {
      main: "#87A5C1",
      contrastText: "#000",
    },
    secondary: {
      main: "#17709C",
      contrastText: "rgb(230,230,230)",
    },
    text: {
      primary: "#000",
      secondary: "rgb(30,30,30)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  backgroundSecondary: {
    bg: "#17709C",
    text: "rgb(230,230,230) ",
  },
  logoColor: "#17709C",
  ...baseTheme,
});

export { darkTheme, lightTheme };
