import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Card, Typography } from "@mui/material";

export default function Widget(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  return (
    <Card
      sx={{
        p: 2,
        bgcolor: props.theme.palette.widget,
        color: props.theme.palette.font,
        borderRadius: 4,
        height: isDownFromLg ? "100%" : "700px",
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
