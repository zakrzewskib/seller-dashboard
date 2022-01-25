import React from "react";
import { useEffect } from "react";

import Highcharts from "highcharts";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

const useSeries = (data, theme, previousData) => {
  if (previousData === null) {
    return [
      {
        name: data.series.name,
        data: data.series.data,

        color: theme.palette.primary.main,
        borderColor: theme.palette.font,
      },
    ];
  } else {
    return [
      {
        name: previousData.name,
        data: previousData.data,

        color: theme.palette.secondary.main,
        borderColor: theme.palette.font,
      },
      {
        name: data.series.name,
        data: data.series.data,

        color: theme.palette.primary.main,
        borderColor: theme.palette.font,
      },
    ];
  }
};

const useOptions = (series, theme, data, chartType) => {
  return {
    chart: {
      type: chartType,

      backgroundColor: theme.palette.background.default,
    },

    title: {
      text: data.title,

      style: {
        color: theme.palette.font,
        fontWeight: "600",
        fontFamily: "Roboto",
        fontSize: "28px",
      },

      margin: 50,
    },

    xAxis: {
      categories: data.categories,

      labels: {
        style: {
          color: theme.palette.font,
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
          color: theme.palette.font,
          fontSize: "14px",
        },
      },
    },

    series: series,

    legend: {
      itemStyle: {
        color: theme.palette.font,
        fontWeight: "400",
      },
      itemHoverStyle: {
        color: theme.palette.primary.main,
      },
    },
  };
};

const HighchartsComponent = props => {
  const isDownFromSm = useMediaQuery(props.theme.breakpoints.down("sm"));

  const containerRef = React.useRef(null);

  const chartRef = React.useRef(null);

  useEffect(() => {
    chartRef.current = Highcharts.chart(containerRef.current, props.options);
  }, [props.options]);

  useEffect(() => {
    chartRef.current.update(props.options, true, true);
  }, [chartRef, props.options]);

  return <div ref={containerRef} {...props} style={{ height: isDownFromSm ? "70%" : "80%" }} />;
};

export default function MyChart(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  const series = useSeries(props.data, props.theme, props.previousData);
  const options = useOptions(series, props.theme, props.data, props.chartType);

  return (
    <Box
      sx={{
        height: isDownFromLg ? "900px" : "650px",
      }}
    >
      {props.loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <SellerChartMenu
            theme={props.theme}
            onIncludePreviousData={props.includePreviousData}
            isPreviousDataIncluded={props.isPreviousDataIncluded}
            onChangeGraphType={props.changeGraphType}
            onChangeValuesType={props.changeValuesType}
            onChangeDataTime={props.changeTime}
            time={props.time}
            valuesType={props.valuesType}
            chartType={props.chartType === "line" ? "Line graph" : "Bar graph"}
          ></SellerChartMenu>

          <HighchartsComponent options={options} theme={props.theme} />
        </>
      )}
    </Box>
  );
}
