import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ListItemWithImage from "./ListItemWithImage";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const profileItemProps = {
    currentAccountPrimaryText: "John Temporary",
    currentAccountSecondaryText: "Seller",
  };

  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <DashboardIcon fontSize="large" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1 }}>
            Dashboard
          </Typography>
          <div>
            {isMobile ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                    sx={{ ml: 2 }}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  id="menu-appbar"
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
                  <MenuItem onClick={handleClose}>
                    <ListItemWithImage
                      primary={profileItemProps.currentAccountPrimaryText}
                      secondary={profileItemProps.currentAccountSecondaryText}
                    />
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemWithImage
                      primary={profileItemProps.currentAccountPrimaryText}
                      secondary={null}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemWithImage
                      primary={profileItemProps.currentAccountPrimaryText}
                      secondary={null}
                    />
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  aria-controls="demo-customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={handleMenu}
                  endIcon={<KeyboardArrowDownIcon />}
                  startIcon={<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>}
                >
                  profile
                </Button>
                <Menu
                  id="demo-customized-menu"
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
                  <MenuItem onClick={handleClose}>
                    <ListItemWithImage
                      primary={profileItemProps.currentAccountPrimaryText}
                      secondary={profileItemProps.currentAccountSecondaryText}
                    />
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemWithImage
                      primary={profileItemProps.currentAccountPrimaryText}
                      secondary={null}
                    />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemWithImage
                      primary={profileItemProps.currentAccountPrimaryText}
                      secondary={null}
                    />
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
