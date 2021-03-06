import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ListItemWithImage from "../atom-components/ListItemWithImage";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Container, Switch } from "@mui/material";
import { styled } from "@mui/system";

import { useState, useEffect } from "react";

export default function Navigation(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [profileItemProps, setProfileItemProps] = useState({
    currentAccountPrimaryText: "Please log in",
    currentAccountSecondaryText: "Seller",
  });

  const [otherProfiles, setOtherProfiles] = useState([]);

  useEffect(() => {
    setOtherProfiles(props.otherProfiles);
  }, [props.otherProfiles]);

  useEffect(() => {
    setProfileItemProps({ ...profileItemProps, currentAccountPrimaryText: props.username });
  }, [props.username]);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const changeProfile = (value, index) => {
    if (index !== -1) {
      const a = [...otherProfiles];
      a[index] = profileItemProps.currentAccountPrimaryText;
      setOtherProfiles(a);
    }

    setProfileItemProps({ ...profileItemProps, currentAccountPrimaryText: value });
    handleClose();
    props.onChangeProfile(value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChanged = e => {
    props.handleChange(e);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 0.8,
          backgroundColor: props.theme.palette.primary.main,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: props.theme.palette.primary.main,
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 0.8,
      backgroundColor: props.theme.palette.primary.main,
      borderRadius: 20 / 2,
    },
  }));

  return (
    <AppBar position="fixed" sx={{ bgcolor: props.theme.palette.navbar }}>
      <Container maxWidth="xl">
        <Toolbar style={{ padding: 0 }}>
          <DashboardIcon fontSize="large" sx={{ color: props.theme.palette.navBarLogo }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1, color: props.theme.palette.navBarLogo }}>
            Dashboard
          </Typography>

          <MaterialUISwitch
            onChange={handleThemeChanged}
            checked={props.checkedForSwitch}
            inputProps={{ "aria-label": "controlled" }}
          />

          <div>
            {isMobile ? (
              <Tooltip title="Account settings">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                  sx={{ ml: 2 }}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>{profileItemProps.currentAccountPrimaryText[0]}</Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Button
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleMenu}
                endIcon={<KeyboardArrowDownIcon />}
                startIcon={
                  <Avatar sx={{ width: 32, height: 32 }}>{profileItemProps.currentAccountPrimaryText[0]}</Avatar>
                }
              >
                {profileItemProps.currentAccountPrimaryText}
              </Button>
            )}

            <Menu
              id="menu"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => changeProfile(profileItemProps.currentAccountPrimaryText)}>
                <ListItemWithImage
                  theme={props.theme}
                  primary={profileItemProps.currentAccountPrimaryText}
                  secondary={profileItemProps.currentAccountSecondaryText}
                />
              </MenuItem>

              {otherProfiles.map((name, idx) => {
                return (
                  <MenuItem key={idx} onClick={() => changeProfile(name, idx)}>
                    <ListItemWithImage theme={props.theme} primary={name} secondary={null} />
                  </MenuItem>
                );
              })}
              <Divider />
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: props.theme.palette.font,
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <Typography style={{ color: props.theme.palette.font }}>Logout</Typography>
                </MenuItem>
              </a>
            </Menu>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
