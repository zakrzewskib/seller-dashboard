import React from "react";
import { useState, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";

export default function SellerChart(props) {
  const [options, setOptions] = useState({
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
    colors: ["red"],
  });

  useEffect(() => {
    console.log(props.theme.name);
    setOptions((prevState) => ({
      ...prevState,
      colors: props.theme.name === "darkTheme" ? ["red"] : ["blue"],
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

  const changeTheme = () => {
    setOptions((prevState) => ({ ...prevState, colors: ["blue"] }));
  };

  return (
    <Box
      sx={{
        height: "650px",
      }}
    >
      <button onClick={changeTheme}>test</button>
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
