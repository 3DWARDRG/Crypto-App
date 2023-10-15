import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const fechaInicio = new Date("2023-09-20T00:00:00");
const fechas = [];

for (let i = 0; i < 169; i++) {
  fechas.push(new Date(fechaInicio));
  fechaInicio.setHours(fechaInicio.getHours() + 1);
}

const LineChart = ({ res }) => {
  const data = useMemo(() => {
    console.log('Calculating chart data...'); // Esta línea se imprimirá cada vez que los datos del gráfico se vuelvan a calcular
    return {
      labels: fechas,
      datasets: [
        {
          label: "",
          data: res,
          fill: false,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 4,
          pointBackgroundColor: 'green' // Cambia el color de los indicadores a verde
        },
      ],
    };
  }, [res]);

  const options = {
    scales: {
      x: {
        display: false, // Esto oculta las etiquetas del eje x
      },
      y: {
        beginAtZero: false,
              ticks: {
        color: 'white' // Cambia el color del texto del eje y a blanco
      }
      },
    },
    plugins: {
      legend: {
        display: false, // Esto oculta la leyenda
      },
    },
    animation: {
      duration: 0 // general animation time
    },
    hover: {
      animationDuration: 0 // duration of animations when hovering an item
    },
    responsiveAnimationDuration: 0, // animation duration after a resize
    elements: {
      line: {
        tension: 0 // disables bezier curves
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default React.memo(LineChart);
