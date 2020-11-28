import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3eb8fd",
    },
    secondary: {
      main: "#efefef",
    },
  },
  typography: {
    h1: {
      fontFamily: "Poppins",
      fontSize: "1.1rem",
    },
  },
  shape: {
    borderRadius: "1em",
  },
  spacing: 10,
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        margin: 5,
        borderRadius: "2em",
      },
    },
  },
});
