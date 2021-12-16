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

import MySelect from "../../atom-components/MySelect.jsx";

import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

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
    <Stack
      direction="row"
      alignItems="center"
      gap="24px"
      justifyContent="center"
      marginBottom="18px"
    >
      <MySelect
        default={{ value: "Bar graph" }}
        items={[{ value: "Bar graph" }, { value: "Line graph" }]}
        theme={props.theme}
        width={140}
      ></MySelect>

      <MySelect
        default={{ value: "Total profit" }}
        items={[{ value: "Total profit" }, { value: "Number of items" }]}
        theme={props.theme}
        width={180}
      ></MySelect>

      <MySelect
        default={{ value: "Today" }}
        items={[
          { value: "Today" },
          { value: "This week" },
          { value: "This year" },
        ]}
        theme={props.theme}
      ></MySelect>

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
    </Stack>
  );
}
