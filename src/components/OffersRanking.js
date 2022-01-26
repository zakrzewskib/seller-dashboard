import React from "react";
import { offers2 } from "../data-our-db-mock/user2-data";
import { offers } from "../data-our-db-mock/user1-data";
import OfferItem from "../components/OfferItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MySelect from "../atom-components/MySelect.jsx";

export default function OffersRanking(props) {
  const [mode, setMode] = React.useState("");
  const [user_offers2, setUserOffers] = React.useState(offers);
  var user_offers = null;
  var opt1 = "Num of sold - asc";
  var opt2 = "Num of sold - des";
  var opt3 = "Popularity - desc";
  var opt4 = "Turnover - desc";

  const handleChange = (value) => {
    setMode(value);
  };

  function sortOffers(dataset) {
    if (dataset === 1) {
      user_offers = offers;
    }
    if (dataset === 2) {
      user_offers = offers2;
    }
    let o;
    switch (mode) {
      case opt2:
        o = user_offers.sort(compareNumbersDesc);
        break;
      case opt3:
        o = user_offers.sort(comparePopularityDesc);
        break;
      case opt4:
        o = user_offers.sort(compareTurnoverDesc);
        break;
      default:
        o = user_offers.sort(compareNumbersAsc);
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
      {props.user === 3 ? (
        <>
          <Typography variant="h6" sx={{ mt: 5, textAlign: "center" }}>
            You don't have any offers
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Lets make some deals!
          </Typography>
        </>
      ) : (
        sortOffers(props.user)
          .slice(0, 5)
          .map((x) =>
            mode === opt2 || mode === opt4 ? (
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
          )
      )}
    </Box>
  );
}
