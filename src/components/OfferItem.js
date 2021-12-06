import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function OfferItem(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'row' },
        alignItems: 'center',
        bgcolor: props.theme.palette.cardBackground,
        color: props.theme.palette.font,
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        mt: 2,
        minHeight: { xs: 100, md: 100 },
        // minWidth: { xs: 400, md: 400 },
        maxHeight: { xs: 100, md: 100 },
        // maxWidth: { xs: 1000, md: 1000 },
      }}
    >
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          maxHeight: { xs: 100, md: 100 },
          maxWidth: { xs: 100, md: 100 },
          objectFit: 'cover',
        }}
        src={props.img}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: { xs: 'flex-start', md: 'flex-start' },
          m: 3,
        }}
      >
        <Box component="span" sx={{ fontSize: 20, mt: 0, mb: 0.1 }}>
          {props.offerTitle}
        </Box>
        <Box component="span" sx={{ fontSize: 14 }}>
          number of sold units: {props.numberOfSoldUnits}
        </Box>
        {/* <Box component="span" sx={{ fontSize: 14 }}>
          second param: {props.secondParam}
        </Box> */}
      </Box>
    </Box>
  );
}
