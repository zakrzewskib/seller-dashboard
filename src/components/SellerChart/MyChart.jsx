import React from "react";
import { useState, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MyChart(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        height: isDownFromLg ? "" : "650px",
      }}
    >
      <SellerChartMenu
        theme={props.theme}
        onIncludePreviousData={props.includePreviousData}
        onChangeGraphType={props.changeGraphType}
        onChangeValuesType={props.changeValuesType}
        onChangeDataTime={props.changeDataTime}
        time={props.time}
        values={props.values}
      ></SellerChartMenu>

      <HighchartsReact
        containerProps={{ style: { height: "80%" } }}
        allowChange="true"
        highcharts={Highcharts}
        options={props.options}
      />
    </Box>
  );
}
