import "./App.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { CssBaseline, FormControlLabel, Switch } from "@mui/material";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const colors = {
    primaryDark: "#7E57C2",
    primaryLight: "#FEAC34",

    white: "#ffffff",

    grey1: "#DDDDDD",
    grey2: "#BDBDBD",
    grey3: "#616161",
    grey4: "#757575",
    grey5: "#363636",
    grey6: "#424242",
    grey7: "#212121",
    grey8: "#252525",

    redAttention: "#F44336",
  };

  const darkTheme = createTheme({
    name: "darkTheme",

    palette: {
      primary: {
        main: colors.primaryDark,
      },

      notActive: {
        main: colors.widgetDark,
      },

      background: {
        default: colors.grey6,
      },

      navbar: colors.grey7,

      navBarLogo: colors.white,

      widget: colors.grey3,

      offer: colors.grey4,

      font: colors.white,

      notActiveButtonFont: colors.grey2,
    },

    // typography: {
    //   allVariants: {
    //     color: '#fff',
    //   },
    // },

    overrides: {
      overrides: {
        Switch: {
          // Switch should look different
        },
      },
    },
  });

  const lightTheme = createTheme({
    name: "lightTheme",

    palette: {
      primary: {
        main: colors.primaryLight,
      },

      notActive: {
        main: colors.grey2,
      },

      background: {
        default: colors.white,
      },

      navbar: colors.grey7,

      navBarLogo: colors.white,

      widget: colors.grey2,
      offer: colors.grey1,

      font: colors.grey8,

      notActiveButtonFont: colors.grey1,
    },
  });

  const [theme, setTheme] = useState(darkTheme);
  const [checked, setChecked] = useState(true);

  const [key, setKey] = useState(1);

  const onHandleChange = (e) => {
    setChecked(e.target.checked);
    const theme = checked ? lightTheme : darkTheme;
    setTheme(theme);

    setKey(Math.random());
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navigation
          theme={theme}
          checkedForSwitch={checked}
          handleChange={onHandleChange}
        />{" "}
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<LoginPage theme={theme} />} />

          <Route
            exact
            path="/dashboard"
            element={<Dashboard theme={theme} keyToMountAgain={key} />}
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
