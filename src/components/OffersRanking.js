import React from "react";
import { offers } from "../data-our-db-mock/user1-data";
import OfferItem from "../components/OfferItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function OffersRanking(props) {
  const [mode, setMode] = React.useState("");

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "row" },
          bgcolor: props.theme.palette.cardBackground,
          color: props.theme.palette.fontColor,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ mt: 1 }}>
          Offers Ranking
        </Typography>
        <FormControl variant="filled" sx={{ m: 0, minWidth: 180 }} size="small">
          <Select value={mode} onChange={handleChange} displayEmpty>
            <MenuItem value="">Num of sold - asc</MenuItem>
            <MenuItem value={1}>Num of sold - desc</MenuItem>
            <MenuItem value={2}>Popularity - desc</MenuItem>
            <MenuItem value={3}>Turnover - desc</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {offers.slice(0, 5).map((x) => (
        <OfferItem
          theme={props.theme}
          offerTitle={x.title}
          numberOfSoldUnits={x.numberOfSoldUnits}
          secondParam={x.turnover}
          img={x.img}
        />
      ))}
    </>
  );
}
