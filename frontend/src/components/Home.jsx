import React, { useState, useEffect } from 'react';
import BarChart from '../scenes/BarChart.js';
import PieChart from '../scenes/PieChart.js';
import LineChart from '../scenes/LineChart.js';
import DoughnutChart from '../scenes/DoughnutChart.js';


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/alldata');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DashBoard</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Bar Chart</h3>
          </div>
          <div className="charts">
            <BarChart data={data} />
            
          </div>
          <div className="charts">
          <PieChart data={data} />
          </div>
        </div>


        
      </div>



      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Bar Chart</h3>
          </div>
          <div className="charts">
            <LineChart data={data} />
            
          </div>
          <div className="charts">
          <DoughnutChart data={data} />
          </div>
        </div>


        
      </div>


     
    </main>
  );
};

export default Home;
