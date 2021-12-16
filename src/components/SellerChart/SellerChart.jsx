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
  lastWeekSeries,
  lastDaySeries,
  lastYearSeries,
  thisWeekTotalProfit,
  thisYearTotalProfit,
  thisDayTotalProfit,
} from "../../data-our-db-mock/user1-data";
import MyChart from "./MyChart";

export default function SellerChart(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  let selectedOption;
  let selectedPreviousData;

  const setChart = () => {
    if (localStorage.getItem("time") === "Today") {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = thisDayTotalProfit;
      } else {
        selectedOption = thisDayItemsSold;
      }
      selectedPreviousData = lastDaySeries;
    } else if (localStorage.getItem("time") === "This week") {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = thisWeekTotalProfit;
      } else {
        selectedOption = thisWeekItemsSold;
      }

      selectedPreviousData = lastWeekSeries;
    } else if (localStorage.getItem("time") === "This year") {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = thisYearTotalProfit;
      } else {
        selectedOption = thisYearItemsSold;
      }

      selectedPreviousData = lastYearSeries;
    } else {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = thisDayTotalProfit;
      } else {
        selectedOption = thisDayItemsSold;
      }

      selectedPreviousData = lastDaySeries;
    }

    console.log("in set chart" + selectedOption.time, selectedOption.values);
  };

  setChart();

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
          fontSize: "14px",
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

  const [series, setSeries] = useState([
    {
      name: selectedOption.series.name,
      data: selectedOption.series.data,
      color: props.theme.palette.primary.main,
      borderColor: props.theme.palette.font,
    },
  ]);

  // React.useEffect(() => {
  //   // setOptions((prevState) => ({
  //   //   ...prevState,
  //   //   series: series,
  //   // }));

  //   console.log(series);
  // }, [series]);

  const setNewChartOptions = (option) => {
    setOptions((prevState) => ({
      ...prevState,
      title: { ...prevState.title, text: option.title },
      xAxis: { ...prevState.xAxis, categories: option.categories },
      series: [
        {
          name: option.series.name,
          data: option.series.data,
          color: props.theme.palette.primary.main,
          borderColor: props.theme.palette.font,
        },
      ],
    }));
  };

  const changeGraphType = (value) => {
    if (value === "Bar graph") {
      setOptions((prevState) => ({
        ...prevState,
        chart: {
          type: "column",
          backgroundColor: props.theme.palette.background.default,
        },
      }));
    } else {
      setOptions((prevState) => ({
        ...prevState,
        chart: {
          type: "line",
          backgroundColor: props.theme.palette.background.default,
        },
      }));
    }
  };

  const changeValuesType = (value) => {
    let option;
    let time = localStorage.getItem("time");

    if (value === "Number of items") {
      if (time === "Today") {
        option = thisDayItemsSold;
      } else if (time === "This week") {
        option = thisWeekItemsSold;
      } else {
        option = thisYearItemsSold;
      }
    } else {
      if (time === "Today") {
        option = thisDayTotalProfit;
      } else if (time === "This week") {
        option = thisWeekTotalProfit;
      } else {
        option = thisYearTotalProfit;
      }
    }

    localStorage.setItem("values", option.values);
    console.log(option.time);
    console.log(option.values);

    setNewChartOptions(option);
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

    setNewChartOptions(option);
  };

  const includePreviousData = (value) => {
    if (!value) {
      setOptions((prevState) => ({
        ...prevState,
        series: [
          ...prevState.series,
          {
            name: selectedOption.series.name,
            data: selectedPreviousData.data,
            borderColor: props.theme.palette.font,
            color: props.theme.palette.secondary.main,
          },
        ],
      }));
    } else {
      setOptions((prevState) => ({
        ...prevState,
        series: [
          {
            name: selectedOption.name,
            data: selectedOption.data,
            color: props.theme.palette.primary.main,
            borderColor: props.theme.palette.font,
          },
        ],
      }));
    }
  };

  return (
    <MyChart
      options={options}
      theme={props.theme}
      includePreviousData={includePreviousData}
      changeGraphType={changeGraphType}
      changeValuesType={changeValuesType}
      changeDataTime={changeDataTime}
      time={selectedOption.time}
      values={selectedOption.values}
    ></MyChart>
  );
}
