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
  const [time, setTime] = useState("today");
  const [valuesType, setValuesType] = useState("profit");
  const [isPreviousDataIncluded, setIsPreviousDataIncluded] = useState(true);
  const [chartType, setChartType] = useState("line");

  return <MyChart></MyChart>;
}
