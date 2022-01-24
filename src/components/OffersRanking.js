import React from "react";
import { offers } from "../data-our-db-mock/user1-data";
import OfferItem from "../components/OfferItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import zIndex from "@mui/material/styles/zIndex";
import MySelect from "../atom-components/MySelect.jsx";

export default function OffersRanking(props) {
  const [mode, setMode] = React.useState("");

  var opt1 = "Num of sold - asc";
  var opt2 = "Num of sold - des";
  var opt3 = "Popularity - desc";
  var opt4 = "Turnover - desc";

  const handleChange = (value) => {
    setMode(value);
  };

  function sortOffers() {
    let o;
    switch (mode) {
      case opt2:
        o = offers.sort(compareNumbersDesc);
        break;
      case opt3:
        o = offers.sort(comparePopularityDesc);
        break;
      case opt4:
        o = offers.sort(compareTurnoverDesc);
        break;
      default:
        o = offers.sort(compareNumbersAsc);
    }
    return o;
  }

  function compareNumbersAsc(a, b) {
    return a.numberOfSoldUnits - b.numberOfSoldUnits;
  }
  function compareNumbersDesc(a, b) {
    return b.numberOfSoldUnits - a.numberOfSoldUnits;
  }
  function comparePopularityDesc(a, b) {
    return b.views - a.views;
  }
  function compareTurnoverDesc(a, b) {
    return b.turnover - a.turnover;
  }

  return (
    <Box
      sx={{
        height: "650px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          bgcolor: props.theme.palette.cardBackground,
          color: props.theme.palette.font,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
          Offers Ranking
        </Typography>
        <MySelect
          default={{ value: opt1 }}
          items={[
            { value: opt1 },
            { value: opt2 },
            { value: opt3 },
            { value: opt4 },
          ]}
          theme={props.theme}
          width={180}
          onHandleChange={handleChange}
        />
      </Box>
      {sortOffers()
        .slice(0, 5)
        .map((x) =>
          mode === 1 || mode === 3 ? (
            <OfferItem
              key={Math.random()}
              theme={props.theme}
              offerTitle={x.title}
              numberOfSoldUnits={x.numberOfSoldUnits}
              secondParam={x.turnover}
              mode={mode}
              img={x.img}
            />
          ) : (
            <OfferItem
              key={Math.random()}
              theme={props.theme}
              offerTitle={x.title}
              numberOfSoldUnits={x.numberOfSoldUnits}
              secondParam={x.views}
              mode={mode}
              img={x.img}
            />
          )
        )}
    </Box>
  );
}
