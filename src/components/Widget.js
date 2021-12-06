import { Card } from '@mui/material';
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
      {props.children}
    </Card>
  );
}
