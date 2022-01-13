import React from "react";
import { Card, Typography } from "@mui/material";

export default function Widget(props) {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: props.theme.palette.widget,
        color: props.theme.palette.font,
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {" "}
        {props.title}{" "}
      </Typography>{" "}
      {props.children}{" "}
    </Card>
  );
}
