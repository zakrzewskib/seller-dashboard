import { Container, Grid } from '@mui/material';
import React from 'react';
import OfferItem from '../components/OfferItem';
import OffersRanking from '../components/OffersRanking';
import Widget from '../components/Widget';

export default function Dashboard(props) {
  return (
    <Container maxWidth="xl" sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={8}>
          <Widget theme={props.theme}></Widget>
        </Grid>
        <Grid item sm={12} md={4}>
          <Widget theme={props.theme}>
            <OffersRanking theme={props.theme} />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}
