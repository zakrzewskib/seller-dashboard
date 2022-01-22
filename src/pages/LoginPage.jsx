import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Bartosz Zakrzewski & Bartłomiej Czekaj"}
    </Typography>
  );
}

export const PrivateRoute = props => {
  if (!mockupAuth.isAuthenticated) {
    return <LoginPage theme={props.theme} />;
  }
  return <div>{props.children}</div>;
};

export const mockupAuth = {
  isAuthenticated: false,

  login(username, password, callbackFunction) {
    if (username === "test" && password === "test") {
      this.isAuthenticated = true;
      callbackFunction();
    }
  },

  logout(callbackFunction) {
    this.isAuthenticated = false;
    callbackFunction();
  },
};

const CustomTextFieldDark = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#ffffff",
  },
  "& label": {
    color: "#7E57C2",
  },
  "& label.Mui-focused": {
    color: "#7E57C2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7E57C2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#7E57C2",
    },
    "&:hover fieldset": {
      borderColor: "#7E57C2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7E57C2",
    },
  },
}));

const CustomTextFieldLight = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "#252525",
  },
  "& label": {
    color: "#FEAC34",
  },
  "& label.Mui-focused": {
    color: "#FEAC34",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FEAC34",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FEAC34",
    },
    "&:hover fieldset": {
      borderColor: "#FEAC34",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FEAC34",
    },
  },
}));

export default function LoginPage(props) {
  const [email, setEmail] = useState("test");
  const [password, setPassword] = useState("test");
  let navigate = useNavigate();

  const handleSubmit = () => {
    mockupAuth.login(email, password, () => navigate("/", { replace: true }));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: t => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          bgcolor: props.theme.palette.background.default,
          color: props.theme.palette.font,
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, mt: 3, bgcolor: props.theme.palette.primary.main }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {props.theme.name === "darkTheme" ? (
              <div>
                <CustomTextFieldDark
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  color="warning"
                  onChange={e => setEmail(e.target.value)}
                />
                <CustomTextFieldDark
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <CustomTextFieldLight
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  color="warning"
                  onChange={e => setEmail(e.target.value)}
                />
                <CustomTextFieldLight
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            )}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              sx={{ color: "#BDBDBD" }}
            />
            <RouterLink to="/dashboard">
              <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
            </RouterLink>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5, color: props.theme.palette.font }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
