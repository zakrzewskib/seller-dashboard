import React from "react";
import { useState, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SellerChart(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  const [options, setOptions] = useState({
    chart: {
      type: "column",
      backgroundColor: props.theme.palette.background.default,
    },

    title: {
      style: {
        color: props.theme.palette.font,
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: "28px",
      },
      margin: 50,

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
      labels: {
        style: {
          color: props.theme.palette.font,
        },
      },
    },

    yAxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          color: props.theme.palette.font,
        },
      },
    },

    series: [
      {
        name: "Total number of items sold",
        data: [211, 451, 545, 123, 123, 1235, 555],
        color: props.theme.palette.primary.main,
      },
    ],

    legend: {
      itemStyle: {
        color: props.theme.palette.font,
        fontWeight: "400",
      },
      itemHoverStyle: {
        color: props.theme.palette.primary.main,
      },
    },
  });

  useEffect(() => {
    console.log(props.theme.name);
    setOptions((prevState) => ({
      ...prevState,
      //colors: props.theme.name === "darkTheme" ? ["red"] : ["blue"],
    }));
  }, [props.theme]);

  const includePreviousData = (include) => {
    console.log("should include previous data - " + include);
  };

  const changeGraphType = (value) => {
    console.log(value);
  };

  const changeValuesType = (value) => {
    console.log(value);
  };

  const changeDataTime = (value) => {
    console.log(value);
  };

  return (
    <Box
      sx={{
        height: isDownFromLg ? "" : "650px",
      }}
    >
      <SellerChartMenu
        theme={props.theme}
        onIncludePreviousData={includePreviousData}
        onChangeGraphType={changeGraphType}
        onChangeValuesType={changeValuesType}
        onChangeDataTime={changeDataTime}
      ></SellerChartMenu>

      <HighchartsReact
        containerProps={{ style: { height: "80%" } }}
        highcharts={Highcharts}
        options={options}
      />
    </Box>
  );
}
