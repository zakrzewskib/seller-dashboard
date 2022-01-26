export const offers2 = [
  {
    title: "Skrzynka Club Mate 0.5L",
    numberOfSoldUnits: 9,
    turnover: 900,
    views: 645,
    img: "https://swiatshishy.pl/4376-large_default/napoj-club-mate-05l.jpg",
  },
  {
    title: "Mango szt.",
    numberOfSoldUnits: 17,
    turnover: 150,
    views: 5357,
    img: "https://goldenfruits.sklep.pl/userdata/public/gfx/241.jpg",
  },
  {
    title: "Ziele angielskie",
    numberOfSoldUnits: 23,
    turnover: 50,
    views: 2498,
    img: "https://prymat.pl/assets/uploads/prymat-ziele-angielskie-cale-1.jpg",
  },
  {
    title: "Wino z maryjką",
    numberOfSoldUnits: 48,
    turnover: 550,
    views: 7596,
    img: "https://www.alkowiki.pl/wp-content/uploads/Liebfraumilch-wino-maryjne-1200x2130.jpg",
  },
  {
    title: "Kuflowe MOCNE",
    numberOfSoldUnits: 72,
    turnover: 200,
    views: 4522,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPMt4oYnf5w-9_D46hmTb05PjoLITTMtK4A&usqp=CAU",
  },
  {
    title: "Pringles 149g",
    numberOfSoldUnits: 85,
    turnover: 800,
    views: 17199,
    img: "https://designalley.pl/wp-content/uploads/2021/01/pringles_scorhin.jpeg",
  },
  {
    title: "Cebula 1kg",
    numberOfSoldUnits: 127,
    turnover: 300,
    views: 25060,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv6WdqqdAlAWQk_S0Xe4XkcPrijfsLWmDzps0c7zyGruVyQudwIfGBbXDXps6Di0wG30&usqp=CAU",
  },
  {
    title: "Lays Strong 150g",
    numberOfSoldUnits: 139,
    turnover: 600,
    views: 3042,
    img: "https://zakupywgodzine.pl/userdata/public/assets//chilli-lime-removebg-preview%20%281%29.png",
  },
  {
    title: "Piwo Dzik 6%",
    numberOfSoldUnits: 232,
    turnover: 500,
    views: 13567,
    img: "https://swiatoze.pl/wp-content/uploads/2021/08/zubr.png",
  },
  {
    title: "Coca Cola 250ml",
    numberOfSoldUnits: 533,
    turnover: 1500,
    views: 25722,
    img: "https://www.dine4fit.pl/file/image/foodstuff/d9b77cf730fd40eaa0413380642d05cc/0d4d06dbb88a4285b8c3387c99b04dd6?w=300",
  },
];

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

export const todayItemsSold = {
    time: "Today",
    values: "Number of items",

    title: "Total number of items sold today",
    series: {
        name: "Total number of items sold today",
        data: makeData(0, 100, 24),
    },

    categories: makeHours(),
};

export const todayTotalProfit = {
    time: "Today",
    values: "Total profit",

    title: "Total profit today",
    series: {
        name: "Total profit today",
        data: makeProfit(todayItemsSold.series.data, 10, 200),
    },
    categories: makeHours(),
};

export const thisWeekItemsSold = {
    time: "This week",
    values: "Number of items",
    title: "Total number of items sold this week",
    series: {
        name: "Total number of items sold this week",
        data: makeData(0, 1000, 7),
    },
    categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
};

export const thisWeekTotalProfit = {
    time: "This week",
    values: "Total profit",

    title: "Total profit this week",
    series: {
        name: "Total profit this week",
        data: makeProfit(thisWeekItemsSold.series.data, 10, 200),
    },
    categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
};

export const thisYearItemsSold = {
    time: "This year",
    values: "Number of items",

    title: "Total number of items sold this year",
    series: {
        name: "Total number of items sold this year",
        data: makeData(50000, 100000, 12),
    },

    categories: monthNames,
};

export const thisYearTotalProfit = {
    time: "This year",
    values: "Total profit",

    title: "Total profit this year",
    series: {
        name: "Total profit this year",
        data: makeProfit(thisYearItemsSold.series.data, 10, 200),
    },

    categories: monthNames,
};

export const lastWeekSeriesNumberOfItems = {
    name: "Total number of items sold last week",
    data: makeData(0, 1000, 7),
};

export const lastWeekSeriesTotalProfit = {
    name: "Total profit last week",
    data: makeProfit(lastWeekSeriesNumberOfItems.data, 10, 200),
};

export const yesterdaySeriesNumberOfItems = {
    name: "Total number of items sold yesterday",
    data: makeData(0, 100, 24),
};

export const yesterdaySeriesTotalProfit = {
    name: "Total profit yesterday",
    data: makeProfit(yesterdaySeriesNumberOfItems.data, 10, 200),
};

export const lastYearSeriesNumberOfItems = {
    name: "Total number of items sold last year",
    data: makeData(50000, 100000, 12),
};

export const lastYearSeriesTotalProfit = {
    name: "Total profit last year",
    data: makeProfit(lastYearSeriesNumberOfItems.data, 10, 200),
};