export const offers = [{
        title: "Apple MacBook 15 pro",
        numberOfSoldUnits: 10,
        turnover: 100000,
        views: 16345,
        img: "https://static3.ultraupgrade.pl/pol_pl_MacBook-Pro-15-Mid2015-i7-4x-2-2GHz-SSD-256GB-16GB-RAM-101146_1.png",
    },
    {
        title: "Razer Lancehead Tournament Edition",
        numberOfSoldUnits: 20,
        turnover: 6000,
        views: 8357,
        img: "https://a.allegroimg.com/s1024/0c0926/2f4b3dd541e28e14df915586205d",
    },
    {
        title: "Samsung Galaxy s20 FE",
        numberOfSoldUnits: 30,
        turnover: 54000,
        views: 12498,
        img: "https://www.tabletowo.pl/wp-content/uploads/2020/10/samsung-galaxy-s20-fe-recenzja-tabletowo-02.jpg",
    },
    {
        title: "Logitech hedphones model 1234",
        numberOfSoldUnits: 40,
        turnover: 8000,
        views: 3596,
        img: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/158584-headphones-review-logitech-g435-lightspeed-gaming-headset-review-headset-shots-image6-lkc3amdp6h.jpg",
    },
    {
        title: "Iphone 13 pro",
        numberOfSoldUnits: 50,
        turnover: 250000,
        views: 4522,
        img: "https://thinkapple.pl/wp-content/uploads/2021/09/E421857A-183A-4C0A-9814-4A13CFD89B58-e1632500292259.jpeg",
    },
    {
        title: "Windows 10 - Professional",
        numberOfSoldUnits: 80,
        turnover: 24000,
        views: 23199,
        img: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_12_11_35_23_278_00.jpg",
    },
    {
        title: "Notebook DELL i7 GTX2070",
        numberOfSoldUnits: 25,
        turnover: 238000,
        views: 2560,
        img: "https://www.vedion.pl/pol_pl_Laptop-Dell-Latitude-3590-i3-8130U-4-GB-bez-dysku-15-6-HD-Klasa-A-11878_2.jpg",
    },
    {
        title: "Xiaomi Redmi 9",
        numberOfSoldUnits: 40,
        turnover: 40000,
        views: 35042,
        img: "https://www.gsmmaniak.pl/wp-content/uploads/gsmmaniak/2020/06/redmi-9-wyglad.png",
    },
    {
        title: "HP Deskjet 3700",
        numberOfSoldUnits: 35,
        turnover: 7000,
        views: 23567,
        img: "https://fs.siteor.com/gsmonline/articles/photo1s/99344/large/hp_deskjet_3700_20160923m.jpg?1474635263",
    },
    {
        title: "Rolex Milgauss 40mm",
        numberOfSoldUnits: 5,
        turnover: 290000,
        views: 1548,
        img: "https://i1.wp.com/www.watchcollectors.co.uk/wp-content/uploads/2020/11/Rolex-116400GV-Milgauss-Stainless-Steel-Blue-Dial-Second-Hand-Watch-Collectors-4.jpg",
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

export const thisWeekItemsSold = {
    time: "This week",
    title: "Total number of items sold this week",
    series: {
        name: "Total number of items sold",
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
    title: "Total profit this week",
    series: {
        name: "Total profit (ZŁ)",
        data: makeData(0, 5000, 7),
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

export const lastWeekSeries = {
    name: "Total number of items sold last week",
    data: makeData(0, 1000, 7),
};

export const lastDaySeries = {
    name: "Total number of items sold yesterday",
    data: makeData(0, 100, 24),
};

export const lastYearSeries = {
    name: "Total number of items sold last year",
    data: makeData(50000, 100000, 12),
};

export const thisDayItemsSold = {
    time: "Today",

    title: "Total number of items sold this day",
    series: {
        name: "Total number of items sold",
        data: makeData(0, 100, 24),
    },

    categories: makeHours(),
};

export const thisYearItemsSold = {
    time: "This year",

    title: "Total number of items sold this year",
    series: {
        name: "Total number of items sold",
        data: makeData(50000, 100000, 12),
    },

    categories: monthNames,
};