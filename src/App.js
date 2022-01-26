import "./App.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./pages/LoginPage";
import { CssBaseline } from "@mui/material";
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
      background: {
        default: colors.grey6,
      },
      secondary: {
        main: "#FF688D",
      },
      notActiveCheckBox: colors.grey2,
      navbar: colors.grey7,
      navBarLogo: colors.white,
      widget: colors.grey3,
      offer: colors.grey4,
      font: colors.white,
    },
  });

  const lightTheme = createTheme({
    name: "lightTheme",
    palette: {
      primary: {
        main: colors.primaryLight,
      },
      background: {
        default: colors.white,
      },
      secondary: {
        main: "#008270",
      },
      notActiveCheckBox: colors.grey3,
      navbar: colors.grey7,
      navBarLogo: colors.white,
      widget: colors.grey2,
      offer: colors.grey1,
      font: colors.grey8,
    },
  });

  const [theme, setTheme] = useState(darkTheme);
  const [checkedForTheme, setCheckedForTheme] = useState(true);
  const [username, setUsername] = useState("Please log in");
  const [otherProfiles, setOtherProfiles] = useState([]);
  const [user, setUser] = useState(1);

  const onHandleChange = e => {
    setCheckedForTheme(e.target.checked);
    const theme = checkedForTheme ? lightTheme : darkTheme;
    setTheme(theme);
  };

  const usernameLoggedIn = (username, otherProfiles) => {
    setUsername(username);
    setOtherProfiles(otherProfiles);
  };

  //w przypadku zmiany nazwy tu zmienic!
  const changeProfile = (value) => {
    if(value === "test"){
      setUser(1);
    } else if(value === "first") {
      setUser(2);
    } else {
      setUser(3);
    }
    console.log("change profile");
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navigation
          theme={theme}
          checkedForSwitch={checkedForTheme}
          handleChange={onHandleChange}
          username={username}
          otherProfiles={otherProfiles}
          onChangeProfile={changeProfile}
        />
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<LoginPage theme={theme} usernameLoggedIn={usernameLoggedIn} />} />
          <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute theme={theme} usernameLoggedIn={usernameLoggedIn}>
                <Dashboard theme={theme} user={user}/>
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
