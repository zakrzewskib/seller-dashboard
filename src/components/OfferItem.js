import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function OfferItem(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(500)); //na oko 500px ale mozna zmienic
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "row" },
        alignItems: "center",
        bgcolor: props.theme.palette.offer,
        color: props.theme.palette.font,
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: 1,
        mt: 2,
        minHeight: { xs: 100, md: 100 },
        maxHeight: { xs: 100, md: 100 },
      }}
    >
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          maxHeight: { xs: 100, md: 100 },
          maxWidth: { xs: 100, md: 100 },
          objectFit: "cover",
        }}
        src={props.img}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 3,
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: isMobile ? 18 : 20, mt: 0, mb: 0.1 }}
        >
          {isMobile
            ? props.offerTitle.length > 20
              ? props.offerTitle.substring(0, 20).concat("...")
              : props.offerTitle
            : props.offerTitle.length > 40
            ? props.offerTitle.substring(0, 40).concat("...")
            : props.offerTitle}
        </Box>
        <Box component="span" sx={{ fontSize: 14 }}>
          number of sold units: {props.numberOfSoldUnits}
        </Box>
        <Box component="span" sx={{ fontSize: 14 }}>
          second param: {props.secondParam}
        </Box>
      </Box>
    </Box>
  );
}
