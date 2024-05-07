import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map(item => item.topic), // X-axis labels based on 'topic'
          datasets: [
            {
              label: 'Intensity', // Y-axis data label
              data: data.map(item => item.intensity), // Y-axis data based on 'intensity'
              backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
              borderColor: 'rgba(54, 162, 235, 1)', // Border color
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true, // Start y-axis from zero
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top', // Adjust legend position as needed
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

export default BarChart;
