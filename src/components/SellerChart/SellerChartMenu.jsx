import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

import MySelect from "../../atom-components/MySelect.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function SellerChartMenu(props) {
  const isMobile = useMediaQuery(props.theme.breakpoints.down("sm"));
  const includePreviousDataWidth = 233;

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent={isMobile ? "space-between" : "center"}
      marginBottom="12px"
    >
      <Grid item>
        <MySelect
          default={{ value: "Bar graph" }}
          items={[{ value: "Bar graph" }, { value: "Line graph" }]}
          theme={props.theme}
          width={isMobile ? includePreviousDataWidth : null}
        ></MySelect>
      </Grid>
      <Grid item>
        <MySelect
          default={{ value: "Total profit" }}
          items={[{ value: "Total profit" }, { value: "Number of items" }]}
          theme={props.theme}
          width={isMobile ? includePreviousDataWidth : 180}
        ></MySelect>
      </Grid>
      <Grid item>
        <MySelect
          default={{ value: "Today" }}
          items={[
            { value: "Today" },
            { value: "This week" },
            { value: "This year" },
          ]}
          theme={props.theme}
          width={isMobile ? includePreviousDataWidth : null}
        ></MySelect>
      </Grid>

      <Grid item>
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
      </Grid>
    </Grid>
  );
}
