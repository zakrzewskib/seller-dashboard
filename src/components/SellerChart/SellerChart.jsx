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
import { setOptions } from "highcharts";

export default function SellerChart(props) {
  const [time, setTime] = useState("Today");
  const [valuesType, setValuesType] = useState("Total profit");
  const [isPreviousDataIncluded, setIsPreviousDataIncluded] = useState(true);
  const [chartType, setChartType] = useState("line");
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

  useEffect(() => {});

  const includePreviousData = value => {};

  const changeGraphType = value => {};

  const changeValuesType = value => {};

  return (
    <MyChart
      data={data}
      options={defaultOptions}
      previousData={previousData}
      theme={props.theme}
      includePreviousData={includePreviousData}
      isPreviousDataIncluded={false}
      changeGraphType={changeGraphType}
      changeValuesType={changeValuesType}
      time={time}
      valuesType={valuesType}
      chartType={chartType}
    ></MyChart>
  );
}
