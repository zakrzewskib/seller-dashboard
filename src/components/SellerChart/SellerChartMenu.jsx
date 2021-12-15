import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";

import { useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function SellerChartMenu(props) {
  const [dataOption, setDataOption] = useState("This week");

  const upFromXl = useMediaQuery(props.theme.breakpoints.up("xl"));
  const upFromLg = useMediaQuery(props.theme.breakpoints.up("lg"));
  const upFromMd = useMediaQuery(props.theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(props.theme.breakpoints.down("sm"));

  const handleChange = (event) => {
    setDataOption(event.target.value);
  };

  return (
    <div
      style={{
        marginBottom: "24px",
        display: "flex",
        justifyContent: "space-between",
        height: "60px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Button variant="contained" color="primary">
          <Typography>BAR GRAPH</Typography>
        </Button>
        <Button
          variant="contained"
          color="notActive"
          sx={{
            bgcolor: props.theme.palette.cardBackground,
            color: props.theme.palette.notActiveButtonFont,
          }}
        >
          <Typography>LINE GRAPH</Typography>
        </Button>
      </div>
      <Stack direction="row" alignItems="center">
        <Typography color={props.theme.palette.notActiveButtonFont}>
          TOTAL PROFIT
        </Typography>

        <Switch defaultChecked />

        <Typography color={props.theme.palette.font}>
          NUMBER OF ITEMS
        </Typography>
      </Stack>

      <FormControlLabel
        value="start"
        control={<Checkbox />}
        label={
          <Typography color={props.theme.palette.notActiveButtonFont}>
            INCLUDE PREVIOUS DATA
          </Typography>
        }
        labelPlacement="start"
      />
      <FormControl color="primary" variant="outlined">
        <Select
          color="primary"
          variant="outlined"
          value={dataOption}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"Today"}>Today</MenuItem>
          <MenuItem value={"This week"}>This week</MenuItem>
          <MenuItem value={"This year"}>This year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
