import React from "react";
import { useState, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  thisWeekItemsSold,
  thisDayItemsSold,
  thisYearItemsSold,
} from "../../data-our-db-mock/user1-data";

export default function SellerChart(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  let selectedOption;

  if (localStorage.getItem("time") === "Today") {
    selectedOption = thisDayItemsSold;
  } else if (localStorage.getItem("time") === "This week") {
    selectedOption = thisWeekItemsSold;
  } else if (localStorage.getItem("time") === "This year") {
    selectedOption = thisYearItemsSold;
  } else {
    selectedOption = thisDayItemsSold;
  }

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

      text: selectedOption.title,
    },

    xAxis: {
      categories: selectedOption.categories,
      labels: {
        style: {
          color: props.theme.palette.font,
          // fontWeight: "bold",
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
          // fontWeight: "bold",
          fontSize: "14px",
        },
      },
    },

    series: [
      {
        name: selectedOption.series.name,
        data: selectedOption.series.data,
        color: props.theme.palette.primary.main,
        borderColor: props.theme.palette.font,
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
    console.log(localStorage.getItem("time"));
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
    let option;
    if (value === "Today") {
      option = thisDayItemsSold;
    } else if (value === "This week") {
      option = thisWeekItemsSold;
    } else {
      option = thisYearItemsSold;
    }

    localStorage.setItem("time", option.time);

    setOptions((prevState) => ({
      ...prevState,
      title: { ...prevState.title, text: option.title },
      xAxis: { ...prevState.xAxis, categories: option.categories },
      series: {
        ...prevState.series,
        name: option.series.name,
        data: option.series.data,
      },
    }));

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
        time={selectedOption.time}
      ></SellerChartMenu>

      <HighchartsReact
        containerProps={{ style: { height: "80%" } }}
        highcharts={Highcharts}
        options={options}
      />
    </Box>
  );
}
