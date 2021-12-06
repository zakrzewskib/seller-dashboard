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

export default class SellerChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOption: 'This week',
      options: {
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
      },
      darkTheme: {
        colors: ['blue'],
      },
      lightTheme: {
        colors: ['red'],
      },
    };

    // Highcharts.theme = this.state.darkTheme;
  }

  /*
  Problems with changing theme of the chart in Highcharts:
  1. How to use one of given themes by Highcharts (ex. Dark Unica)

  2. You can't dynamically change theme - you can only set options again
  - there should be a way of detecting when user clicks button to change theme:
  one way of doing it is to change key and it will make component mount again
  - also when opening/refreshing page theme is not set - you have to click switch button to make it change
  */

  // componentWillUnmount() {
  //   console.log('umounted');
  // }

  componentDidMount() {
    // Highcharts.theme = this.state.darkTheme;
    // if (this.props.theme.name === 'darkTheme') {
    //   Highcharts.theme = this.state.darkTheme;
    // } else {
    //   Highcharts.theme = this.state.lightTheme;
    // }
    //Highcharts.setOptions(Highcharts.theme);
  }

  handleChange = (event) => {
    this.setState({
      dataOption: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px' }}>
          <Button variant="contained" color="primary">
            Bar graph
          </Button>

          <Button
            variant="contained"
            color="notActive"
            sx={{
              bgcolor: this.props.theme.palette.cardBackground,
              color: this.props.theme.palette.lightGrey,
            }}
          >
            Line graph
          </Button>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography color={this.props.theme.palette.lightGrey}>
              TOTAL PROFIT
            </Typography>
            <Switch defaultChecked />
            <Typography>NUMBER OF ITEMS</Typography>
          </Stack>

          <FormControlLabel
            value="start"
            control={<Checkbox />}
            label="INCLUDE PREVIOUS DATA"
            labelPlacement="start"
          />

          <FormControl sx={{ bgcolor: 'red', minWidth: 120 }}>
            <Select
              sx={{ bgcolor: 'red' }}
              value={this.dataOption}
              onChange={this.handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem sx={{ bgcolor: 'red' }} value={10}>
                Ten
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'red' }} value={20}>
                Twenty
              </MenuItem>
              <MenuItem sx={{ bgcolor: 'red' }} value={30}>
                Thirty
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </div>
    );
  }
}
