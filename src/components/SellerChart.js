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
          text: 'Total fruit consumption, grouped by gender',
        },

        xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
        },

        yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
            text: 'Number of fruits',
          },
        },

        tooltip: {
          formatter: function () {
            return (
              '<b>' +
              this.x +
              '</b><br/>' +
              this.series.name +
              ': ' +
              this.y +
              '<br/>' +
              'Total: ' +
              this.point.stackTotal
            );
          },
        },

        plotOptions: {
          column: {
            stacking: 'normal',
          },
        },

        series: [
          {
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male',
          },
          {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male',
          },
          {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female',
          },
          {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female',
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
  }

  componentWillUnmount() {
    console.log('umounted');
  }

  componentDidMount() {
    console.log('mounted!');
    console.log(this.props.theme.name);

    if (this.props.theme.name === 'darkTheme') {
      Highcharts.theme = this.state.darkTheme;
    } else {
      Highcharts.theme = this.state.lightTheme;
    }

    Highcharts.setOptions(Highcharts.theme);
  }

  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={this.state.options} />
      </div>
    );
  }
}
