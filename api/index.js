let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const makeHours = () => {
    const hours = [];
    for (let i = 0; i <= 24; i++) {
        hours.push(i + ":00");
    }
    return hours;
};

const makeData = (min, max, howMany) => {
    const data = [];
    for (let i = 0; i < howMany; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return data;
};

const makeProfit = (data, min, max) => {
    const profits = [];
    for (let item of data) {
        profits.push(item * Math.floor(Math.random() * (max - min + 1) + min));
    }
    return profits;
};

const todayItemsSold = {
    time: "Today",
    values: "Number of items",

    title: "Total number of items sold today",
    series: {
        name: "Total number of items sold today",
        data: makeData(0, 100, 24),
    },

    categories: makeHours(),
};

const todayTotalProfit = {
    time: "Today",
    values: "Total profit",

    title: "Total profit today",
    series: {
        name: "Total profit today",
        data: makeProfit(todayItemsSold.series.data, 10, 200),
    },
    categories: makeHours(),
};

const thisWeekItemsSold = {
    time: "This week",
    values: "Number of items",
    title: "Total number of items sold this week",
    series: {
        name: "Total number of items sold this week",
        data: makeData(0, 1000, 7),
    },
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};

const thisWeekTotalProfit = {
    time: "This week",
    values: "Total profit",

    title: "Total profit this week",
    series: {
        name: "Total profit this week",
        data: makeProfit(thisWeekItemsSold.series.data, 10, 200),
    },
    categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};

const thisYearItemsSold = {
    time: "This year",
    values: "Number of items",

    title: "Total number of items sold this year",
    series: {
        name: "Total number of items sold this year",
        data: makeData(50000, 100000, 12),
    },

    categories: monthNames,
};

const thisYearTotalProfit = {
    time: "This year",
    values: "Total profit",

    title: "Total profit this year",
    series: {
        name: "Total profit this year",
        data: makeProfit(thisYearItemsSold.series.data, 10, 200),
    },

    categories: monthNames,
};

const lastWeekSeriesNumberOfItems = {
    name: "Total number of items sold last week",
    data: makeData(0, 1000, 7),
};

const lastWeekSeriesTotalProfit = {
    name: "Total profit last week",
    data: makeProfit(lastWeekSeriesNumberOfItems.data, 10, 200),
};

const yesterdaySeriesNumberOfItems = {
    name: "Total number of items sold yesterday",
    data: makeData(0, 100, 24),
};

const yesterdaySeriesTotalProfit = {
    name: "Total profit yesterday",
    data: makeProfit(yesterdaySeriesNumberOfItems.data, 10, 200),
};

const lastYearSeriesNumberOfItems = {
    name: "Total number of items sold last year",
    data: makeData(50000, 100000, 12),
};

const lastYearSeriesTotalProfit = {
    name: "Total profit last year",
    data: makeProfit(lastYearSeriesNumberOfItems.data, 10, 200),
};

const cors = require("cors");

const express = require("express");
const app = express();
const PORT = 8080;

app.use(cors());
app.options("http://localhost:3000/", cors());

app.get("/data", (req, res) => {
    res.status(200).send({
        thisWeekTotalProfit,
    });
});

app.listen(PORT);