import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current !== null) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    if (chartRef.current && data) {
      // Count occurrences of unique combinations of source and sector
      const counts = {};
      data.forEach(item => {
        const key = `${item.source}-${item.sector}`;
        counts[key] = counts[key] ? counts[key] + 1 : 1;
      });

      // Extract labels and values from counts object
      const labels = Object.keys(counts);
      const values = Object.values(counts);

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Occurrences',
              data: values,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    }

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy(); // Destroy chart instance when component unmounts
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default DoughnutChart;
