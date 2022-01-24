import React from "react";
import { offers } from "../data-our-db-mock/user1-data";
import OfferItem from "../components/OfferItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import zIndex from "@mui/material/styles/zIndex";

export default function OffersRanking(props) {
  const [mode, setMode] = React.useState("");
  const oferty = offers;
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  function sortOffers() {
    let o;
    switch (mode) {
      case 1:
        o = offers.sort(compareNumbersDesc);
        break;
      case 2:
        o = offers.sort(comparePopularityDesc);
        break;
      case 3:
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
        <FormControl>
          <Select value={mode} onChange={handleChange} displayEmpty>
            <MenuItem value="">Num of sold - asc</MenuItem>
            <MenuItem value={1}>Num of sold - desc</MenuItem>
            <MenuItem value={2}>Popularity - desc</MenuItem>
            <MenuItem value={3}>Turnover - desc</MenuItem>
          </Select>
        </FormControl>
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
