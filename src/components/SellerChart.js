import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SellerChart(props) {
  const [dataOption, setDataOption] = useState('This week');
  const options = {
    chart: {
      type: 'column',
    },

    title: {
      text: 'Total number of items sold last week',
    },

    xAxis: {
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },

    yAxis: {
      title: {
        //text: 'Total number of items sold',
        text: '',
      },
    },

    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },

    series: [
      {
        name: 'Total number of items sold',
        data: [211, 451, 545, 123, 123, 1235, 555],
      },
    ],
  };
  const darkTheme = {
    colors: ['blue'],
  };
  const lightTheme = {
    colors: ['red'],
  };

  const handleChange = (event) => {
    setDataOption(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: '24px',
          display: 'flex',
          gap: '12px',
          height: '60px',
          alignItems: 'center',
        }}
      >
        <Button variant="contained" color="primary">
          Bar graph
        </Button>

        <Button
          variant="contained"
          color="notActive"
          sx={{
            bgcolor: props.theme.palette.cardBackground,
            color: props.theme.palette.lightGrey,
          }}
        >
          Line graph
        </Button>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography color={props.theme.palette.lightGrey}>
            TOTAL PROFIT
          </Typography>
          <Switch defaultChecked />
          <Typography>NUMBER OF ITEMS</Typography>
        </Stack>

        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label={
            <Typography color={props.theme.palette.lightGrey}>
              INCLUDE PREVIOUS DATA
            </Typography>
          }
          labelPlacement="start"
        />

        <FormControl color="primary" variant="outlined">
          <Select
            color="primary"
            variant="outlined"
            value={dataOption}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Today'}>Today</MenuItem>
            <MenuItem value={'This week'}>This week</MenuItem>
            <MenuItem value={'This year'}>This year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
