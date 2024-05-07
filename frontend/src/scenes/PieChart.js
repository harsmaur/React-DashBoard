import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map(item => item.sector), // Labels based on 'sector'
          datasets: [
            {
              label: 'Sector Distribution', // Dataset label
              data: data.map(item => item.intensity), // Data based on 'intensity'
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Color for sector 1
                'rgba(54, 162, 235, 0.2)', // Color for sector 2
                'rgba(255, 206, 86, 0.2)', // Color for sector 3
                'rgba(75, 192, 192, 0.2)', // Color for sector 4
                'rgba(153, 102, 255, 0.2)', // Color for sector 5
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)', // Border color for sector 1
                'rgba(54, 162, 235, 1)', // Border color for sector 2
                'rgba(255, 206, 86, 1)', // Border color for sector 3
                'rgba(75, 192, 192, 1)', // Border color for sector 4
                'rgba(153, 102, 255, 1)', // Border color for sector 5
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'right', // Adjust legend position as needed
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
