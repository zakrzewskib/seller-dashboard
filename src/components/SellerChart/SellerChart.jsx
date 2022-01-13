import React from "react";
import { useState, useEffect } from "react";
import MyChart from "./MyChart";

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
import { chart, setOptions } from "highcharts";

export default function SellerChart(props) {
  const [time, setTime] = useState(localStorage.getItem("time") == null ? "Today" : localStorage.getItem("time"));
  const [valuesType, setValuesType] = useState(
    localStorage.getItem("valuesType") == null ? "Total profit" : localStorage.getItem("valuesType")
  );
  const [isPreviousDataIncluded, setIsPreviousDataIncluded] = useState(
    localStorage.getItem("isPreviousDataIncluded") == null ? false : localStorage.getItem("isPreviousDataIncluded")
  );
  const [chartType, setChartType] = useState(
    localStorage.getItem("chartType") == null ? "line" : localStorage.getItem("chartType")
  );
  const [data, setData] = useState(todayItemsSold);
  const [previousData, setPreviousData] = useState(null);

  const [defaultOptions, setDefaultOptions] = useState({
    chart: {
      type: chartType,
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

      text: data.title,
    },

    xAxis: {
      categories: data.categories,
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
        name: data.series.name,
        data: data.series.data,
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
    setOptionsBasedOnParameters();
    setDefaultOptions({
      chart: {
        type: chartType,
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

        text: data.title,
      },

      xAxis: {
        categories: data.categories,
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
          name: data.series.name,
          data: data.series.data,
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
  }, [time, valuesType, chartType, isPreviousDataIncluded]);

  const setOptionsBasedOnParameters = () => {
    if (time === "Today") {
      if (valuesType === "Total profit") {
        setData(todayTotalProfit);
        setPreviousData(yesterdaySeriesTotalProfit);
      } else {
        setData(todayItemsSold);
        setPreviousData(yesterdaySeriesNumberOfItems);
      }
    } else if (time === "This week") {
      if (valuesType === "Total profit") {
        setData(thisWeekTotalProfit);
        setPreviousData(lastWeekSeriesTotalProfit);
      } else {
        setData(thisWeekItemsSold);
        setPreviousData(lastWeekSeriesNumberOfItems);
      }
    } else if (time === "This year") {
      if (valuesType === "Total profit") {
        setData(thisYearTotalProfit);
        setPreviousData(lastYearSeriesTotalProfit);
      } else {
        setData(thisYearItemsSold);
        setPreviousData(lastYearSeriesNumberOfItems);
      }
    } else {
      if (valuesType === "Total profit") {
        setData(todayTotalProfit);
        setPreviousData(yesterdaySeriesTotalProfit);
      } else {
        setData(todayItemsSold);
        setPreviousData(yesterdaySeriesNumberOfItems);
      }
    }

    if (!isPreviousDataIncluded) {
      setPreviousData(null);
    }
  };

  const changeTime = value => {
    setTime(value);
    localStorage.setItem("time", value);
  };

  const includePreviousData = value => {
    setIsPreviousDataIncluded(value);
    localStorage.setItem("includePreviousData", value);
  };

  const changeGraphType = value => {
    setChartType(value === "Line graph" ? "line" : "column");
    localStorage.setItem("chartType", value === "Line graph" ? "line" : "column");
  };

  const changeValuesType = value => {
    setValuesType(value);
    localStorage.setItem("valuesType", value);
  };

  return (
    <MyChart
      data={data}
      options={defaultOptions}
      previousData={previousData}
      theme={props.theme}
      includePreviousData={includePreviousData}
      isPreviousDataIncluded={isPreviousDataIncluded}
      changeGraphType={changeGraphType}
      changeValuesType={changeValuesType}
      changeTime={changeTime}
      time={time}
      valuesType={valuesType}
      chartType={chartType}
    ></MyChart>
  );
}
