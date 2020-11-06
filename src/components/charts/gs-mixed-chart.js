import React, { Component } from "react";
import ReactApexChart from "react-apexcharts"
import { Line } from "recharts";

class GsMixedChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Vendas',
        type: 'column',
        data: [45, 45, 35, 35, 55, 35, 37, 45, 50, 35, 45, 65]
      }, {
        name: 'Vendas Ano Anterior',
        type: 'area',
        data: [35, 40, 25, 25, 45, 30, 30, 40, 45, 25, 40, 60]
      }, {
        name: 'Meta',
        type: 'line',
        data: [50, 55, 40, 45, 60, 40, 45, 55, 60, 40, 55, 70]
      },
    ],
      options: {
        dataLabels: {
          style: {
            colors: ['#fde910', '#0e8ae3', '#000000']
          }
        },
        colors:['#fde910', '#0e8ae3', '#000000'],
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 2],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          },
        },
        
        fill: {
          colors: ['#fde910', '#0e8ae3', '#000000'],
          opacity: [0.95, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2020', '02/01/2020', '03/01/2020', '04/01/2020', '05/01/2020', '06/01/2020', '07/01/2020',
          '08/01/2020', '09/01/2020', '10/01/2020', '11/01/2020', '12/01/2020'
        ],
        markers: {
          size: 5,
        },
        xaxis: {
          type: 'date'
        },
        yaxis: {
          title: {
            text: 'Vendas',
          },
          min: 0
        },
        tooltip: {

          shared: false,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return "R$ " + y.toFixed(0);
              }
              return y;

            }
          }
        },

      }

    }

  }

  render() {
    return (
      <>
      <div id="chart" style={{width: '100%'}}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={320} width={'100%'} />
      </div>
      </>

    )
  }
}

export default GsMixedChart;
