import React from 'react'
import { Bar } from 'react-chartjs-2'

export const Chart = (props) => {

    let labels = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

    let { words } = props

    words = words.map(x => x.length)

    const data = {
      labels: labels,
      options: {

        scales: {
          xAxes: [{
            barThickness: 0.1
          }]
        }
      },
      datasets: [
        {
          label: 'Number of Words Found',
          type: 'line',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,0,77,0.4)',
          borderColor: 'rgba(255,0,77,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,0,77,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,0,77,1)',
          pointHoverBorderColor: 'rgba(255,0,77,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: words
        }
      ]
    };

    return (
      <div>
        <Bar data={data} width={500} height={300}/>
      </div>
    );

}
