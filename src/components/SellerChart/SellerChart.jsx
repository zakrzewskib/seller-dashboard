import React from "react";
import { useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  todayItemsSold,
  todayTotalProfit,
  thisWeekItemsSold,
  thisWeekTotalProfit,
  thisYearItemsSold,
  thisYearTotalProfit,
  lastWeekSeriesNumberOfItems,
  yesterdaySeriesNumberOfItems,
  lastYearSeriesNumberOfItems,
  lastWeekSeriesTotalProfit,
  yesterdaySeriesTotalProfit,
  lastYearSeriesTotalProfit,
} from "../../data-our-db-mock/user1-data";
import MyChart from "./MyChart";

export default function SellerChart(props) {
  let selectedOption;
  let selectedPreviousData;

  let addSeries = null;

  const [additionalSeries, setaAdditionalSeries] = useState(null);

  const setChartFromLocalStorage = () => {
    if (localStorage.getItem("time") === "Today") {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = todayTotalProfit;
        selectedPreviousData = yesterdaySeriesTotalProfit;
      } else {
        selectedOption = todayItemsSold;
        selectedPreviousData = yesterdaySeriesNumberOfItems;
      }
    } else if (localStorage.getItem("time") === "This week") {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = thisWeekTotalProfit;
        selectedPreviousData = lastWeekSeriesTotalProfit;
      } else {
        selectedOption = thisWeekItemsSold;
        selectedPreviousData = lastWeekSeriesNumberOfItems;
      }
    } else if (localStorage.getItem("time") === "This year") {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = thisYearTotalProfit;
        selectedPreviousData = lastYearSeriesTotalProfit;
      } else {
        selectedOption = thisYearItemsSold;
        selectedPreviousData = lastYearSeriesNumberOfItems;
      }
    } else {
      if (localStorage.getItem("values") === "Total profit") {
        selectedOption = todayTotalProfit;
        selectedPreviousData = yesterdaySeriesTotalProfit;
      } else {
        selectedOption = todayItemsSold;
        selectedPreviousData = yesterdaySeriesNumberOfItems;
      }
    }

    if (localStorage.getItem("isIncluded") == 1) {
      addSeries = selectedPreviousData;
    } else {
      addSeries = null;
    }

    selectedOption.chart = {
      type: "column",
      backgroundColor: props.theme.palette.background.default,
    };

    console.log(addSeries);
  };

  setChartFromLocalStorage();

  const [defaultOptions, setDefaultOptions] = useState({
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

  const setNewChartOptions = (option) => {
    setDefaultOptions((prevState) => ({
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
    // let option;
    // if (value === "Bar graph") {
    //   setDefaultOptions((prevState) => ({
    //     ...prevState,
    //     chart: {
    //       type: "column",
    //       backgroundColor: props.theme.palette.background.default,
    //     },
    //   }));
    //   selectedOption.chart = {
    //     type: "column",
    //     backgroundColor: props.theme.palette.background.default,
    //   };
    //   // option = options;
    // } else {
    //   setDefaultOptions((prevState) => ({
    //     ...prevState,
    //     chart: {
    //       type: "line",
    //       backgroundColor: props.theme.palette.background.default,
    //     },
    //   }));
    //   selectedOption.chart = {
    //     type: "line",
    //     backgroundColor: props.theme.palette.background.default,
    //   };
    //   // option = options;
    // }
    // setNewChartOptions(option);
  };

  const changeValuesType = (value) => {
    let option;
    let time = localStorage.getItem("time");

    if (value === "Number of items") {
      if (time === "Today") {
        option = todayItemsSold;
      } else if (time === "This week") {
        option = thisWeekItemsSold;
      } else {
        option = thisYearItemsSold;
      }
    } else {
      if (time === "Today") {
        option = todayTotalProfit;
      } else if (time === "This week") {
        option = thisWeekTotalProfit;
      } else {
        option = thisYearTotalProfit;
      }
    }

    localStorage.setItem("values", option.values);
    setNewChartOptions(option);
    includePreviousData(!localStorage.getItem("isIncluded"));
  };

  const changeDataTime = (value) => {
    let option;
    if (value === "Today") {
      option = todayItemsSold;
    } else if (value === "This week") {
      option = thisWeekItemsSold;
    } else {
      option = thisYearItemsSold;
    }

    localStorage.setItem("time", option.time);
    // setChartFromLocalStorage();
    setNewChartOptions(option);
    includePreviousData(!localStorage.getItem("isIncluded"));
  };

  const includePreviousData = (value) => {
    if (!value) {
      setaAdditionalSeries(selectedPreviousData);
      //additionalSeries = selectedPreviousData;
      localStorage.setItem("isIncluded", 1);
      //addSeries = null;
    } else {
      setaAdditionalSeries(null);
      localStorage.setItem("isIncluded", 0);
      //addSeries = null;
    }

    console.log(localStorage.getItem("isIncluded"));

    setChartFromLocalStorage();
  };

  return (
    <MyChart
      selectedOption={selectedOption}
      options={defaultOptions}
      theme={props.theme}
      includePreviousData={includePreviousData}
      changeGraphType={changeGraphType}
      changeValuesType={changeValuesType}
      changeDataTime={changeDataTime}
      time={selectedOption.time}
      values={selectedOption.values}
      additionalSeries={addSeries}
    ></MyChart>
  );
}
