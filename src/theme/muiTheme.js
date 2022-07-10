import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    fontWeightMedium: 600,
    h2: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    body2: {
      fontFamily: `'Inter', sans-serif`,
    },
  },
  palette: {
    primary: {
      light: "#5c7cfa",
      main: "#4263eb",
      dark: "#364fc7",
    },
  },
  shape: {
    borderRadius: "8px",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableFocusRipple: true,
        size: "large",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 400,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
