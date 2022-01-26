import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";

import GlobalStyles from "@mui/material/GlobalStyles";

export default function ListItemWithImage(props) {
  return (
    <div>
      <GlobalStyles
        styles={{
          ".MuiList-root.MuiList-padding.MuiMenu-list": {
            backgroundColor: props.theme.palette.background.default,
          },
        }}
      />
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography style={{ color: props.theme.palette.font }}>{props.primary}</Typography>}
        secondary={<Typography style={{ color: props.theme.palette.font }}>{props.secondary}</Typography>}
      />
    </div>
  );
}
