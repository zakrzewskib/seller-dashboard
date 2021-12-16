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
    props.onIncludePreviousData(previousDataChecked);
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
          onHandleChange={props.onChangeGraphType}
        />
      </Grid>
      <Grid item>
        <MySelect
          default={{ value: props.values }}
          items={[{ value: "Number of items" }, { value: "Total profit" }]}
          theme={props.theme}
          width={isMobile ? includePreviousDataWidth : 180}
          onHandleChange={props.onChangeValuesType}
        />
      </Grid>
      <Grid item>
        <MySelect
          default={{ value: props.time }}
          items={[
            { value: "Today" },
            { value: "This week" },
            { value: "This year" },
          ]}
          theme={props.theme}
          width={isMobile ? includePreviousDataWidth : null}
          onHandleChange={props.onChangeDataTime}
        />
      </Grid>

      <Grid item>
        <FormControlLabel
          value="start"
          control={
            <Checkbox
              onChange={includePreviousData}
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
          labelPlacement="start"
        />
      </Grid>
    </Grid>
  );
}
