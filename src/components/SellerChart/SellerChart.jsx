import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

import SellerChartMenu from "./SellerChartMenu";

export default function SellerChart(props) {
  const options = {
    chart: {
      type: "column",
    },

    title: {
      text: "Total number of items sold last week",
    },

    xAxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },

    yAxis: {
      title: {
        text: "",
      },
    },

    series: [
      {
        name: "Total number of items sold",
        data: [211, 451, 545, 123, 123, 1235, 555],
      },
    ],
  };

  return (
    <Box
      sx={{
        height: "650px",
      }}
    >
      <SellerChartMenu theme={props.theme}></SellerChartMenu>

      <HighchartsReact
        containerProps={{ style: { height: "80%" } }}
        highcharts={Highcharts}
        options={options}
      />
    </Box>
  );
}
