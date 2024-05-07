import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef.current && data) {
      const labels = data.map(item => item.published);
      const values = data.map(item => item.intensity);

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Intensity',
              data: values,
              fill: false,
              borderColor: 'rgba(255, 99, 132, 0.5)',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy(); // Destroy chart instance when component unmounts
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width={400} height={400} />; // Adjust width and height as needed
};

export default LineChart;
