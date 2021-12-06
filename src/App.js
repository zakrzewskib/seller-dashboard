import "./App.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, FormControlLabel, Switch } from "@mui/material";
import Navigation from "./components/Navigation";

function App() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#7E57C2",
      },
      background: {
        default: "#424242",
      },
      cardBackground: "#616161",
      fontColor: "#fff",
    },
    typography: {
      allVariants: {
        color: "#fff",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#FEAC34",
      },
      background: {
        default: "#fff",
      },
      cardBackground: "#bdbdbd",
      fontColor: "#212121",
    },
  });

  const [theme, setTheme] = useState(darkTheme);
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    const theme = checked ? lightTheme : darkTheme;
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <CssBaseline />
      <FormControlLabel
        control={
          <Switch
            onChange={handleChange}
            checked={checked}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Switch theme"
      />
      <Dashboard theme={theme} />
    </ThemeProvider>
  );
}

export default App;
