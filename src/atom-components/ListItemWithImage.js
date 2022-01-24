import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";

export default function ListItemWithImage(props) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.primary} secondary={<Typography style={{ color: "#FFFFFF" }}>{props.secondary}</Typography>} />
    </ListItem>
  );
}
