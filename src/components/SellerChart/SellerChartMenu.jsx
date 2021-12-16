import React from "react";
import { useState } from "react";

import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MySelect from "../../atom-components/MySelect.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function SellerChartMenu(props) {
  const [previousDataChecked, setPreviousDataChecked] = useState(false);

  const isMobile = useMediaQuery(props.theme.breakpoints.down("sm"));
  const includePreviousDataWidth = 233;

  const includePreviousData = () => {
    setPreviousDataChecked((prevState) => !prevState);
  };

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
          control={
            <Checkbox
              sx={{
                color: props.theme.palette.notActiveCheckBox,
                "&.Mui-checked": {
                  color: props.theme.palette.font,
                },
              }}
            />
          }
          label={
            <Typography
              color={
                previousDataChecked
                  ? props.theme.palette.font
                  : props.theme.palette.notActiveCheckBox
              }
            >
              INCLUDE PREVIOUS DATA
            </Typography>
          }
          onChange={includePreviousData}
          labelPlacement="start"
        />
      </Grid>
    </Grid>
  );
}
