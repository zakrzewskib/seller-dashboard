import React from "react";
import { useState, useEffect } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Box from "@mui/system/Box";
import SellerChartMenu from "./SellerChartMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

const useSeries = (selectedOption, props, additionalSeries) => {
  if (additionalSeries == null) {
    return [
      {
        name: selectedOption.series.name,
        data: selectedOption.series.data,
        color: props.theme.palette.primary.main,
        borderColor: props.theme.palette.font,
      },
    ];
  } else {
    return [
      {
        name: selectedOption.series.name,
        data: selectedOption.series.data,
        color: props.theme.palette.primary.main,
        borderColor: props.theme.palette.font,
      },
      additionalSeries,
    ];
  }
};

const useOptions = (series, props, selectedOption) => {
  return {
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

    series: series,

    legend: {
      itemStyle: {
        color: props.theme.palette.font,
        fontWeight: "400",
      },
      itemHoverStyle: {
        color: props.theme.palette.primary.main,
      },
    },
  };
};

const HighchartsComponent = ({ options, ...props }) => {
  const containerRef = React.useRef(null);
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    chartRef.current = Highcharts.chart(containerRef.current, options);
  }, [options]);

  React.useEffect(() => {
    console.log("update options");
    chartRef.current.update(options, true, true);
  }, [chartRef, options]);

  return <div ref={containerRef} {...props} />;
};

export default function MyChart(props) {
  const isDownFromLg = useMediaQuery(props.theme.breakpoints.down("lg"));

  const series = useSeries(props.selectedOption, props, props.additionalSeries);
  const options = useOptions(series, props, props.selectedOption);

  return (
    <Box
      sx={{
        height: isDownFromLg ? "" : "650px",
      }}
    >
      <SellerChartMenu
        theme={props.theme}
        onIncludePreviousData={props.includePreviousData}
        onChangeGraphType={props.changeGraphType}
        onChangeValuesType={props.changeValuesType}
        onChangeDataTime={props.changeDataTime}
        time={props.time}
        values={props.values}
        // checked={props.checked}
      ></SellerChartMenu>

      {/* <HighchartsReact
        containerProps={{ style: { height: "80%" } }}
        allowChange="true"
        highcharts={Highcharts}
        options={props.options}
      /> */}

      <HighchartsComponent options={options} />
    </Box>
  );
}
