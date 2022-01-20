import { Container, Grid } from "@mui/material";
import React from "react";
import OffersRanking from "../components/OffersRanking";
import Widget from "../components/Widget";
import SellerChart from "../components/SellerChart/SellerChart.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Dashboard(props) {
  return (
    <Container maxWidth="xl" sx={{ p: 2, mt: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Widget theme={props.theme}>
            <SellerChart theme={props.theme} />
          </Widget>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Widget theme={props.theme}>
            <OffersRanking theme={props.theme} />
          </Widget>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Widget theme={props.theme}>
            <Box
              sx={{
                height: "700px",
              }}
            >
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                Your orders
              </Typography>
            </Box>
          </Widget>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Widget theme={props.theme}>
            <Box
              sx={{
                height: "700px",
              }}
            >
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                Feedback
              </Typography>
            </Box>
          </Widget>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Widget theme={props.theme}>
            <Box sx={{ height: "400px" }}>
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                Quality
              </Typography>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}
