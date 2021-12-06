import { Card, Typography } from '@mui/material';
import React from 'react';

export default function Widget(props) {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: props.theme.palette.widget,
        color: props.theme.palette.font,
      }}
    >
      <Typography variant="h5" sx={{ mt: 1, fontWeight: 'bold' }}>
        {props.title}
      </Typography>
      {props.children}
    </Card>
  );
}
