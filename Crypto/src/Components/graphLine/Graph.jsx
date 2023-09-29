import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from "chart.js/auto";

const fechaInicio = new Date('2023-09-20T00:00:00')
const fechas = []

for (let i = 0; i < 169; i++) {
  fechas.push(new Date(fechaInicio))
  fechaInicio.setHours(fechaInicio.getHours() + 1)
}

const LineChart = ({ res }) => {
  const data = {
    labels: fechas,
    datasets: [
      {
        label: '',
        data: res,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 4
      }
    ]
  }

  const options = {
    scales: {
      x: {
        display: false // Esto oculta las etiquetas del eje x
      },
      y: {
        beginAtZero: false
      }
    },
    plugins: {
      legend: {
        display: false // Esto oculta la leyenda
      }
    }
  }

  return <Line data={data} options={options} />
}

export default LineChart
