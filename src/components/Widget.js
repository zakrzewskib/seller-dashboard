import { Card } from '@mui/material';
import React from 'react';

export default function Widget(props) {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: props.theme.palette.cardBackground,
        color: props.theme.palette.fontColor,
      }}
    >
      {props.children}
    </Card>
  );
}
