import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default class SellerChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </div>
    );
  }
}
