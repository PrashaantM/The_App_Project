import React from "react";
import { Pie } from "react-chartjs-2";

const Analysis = ({ performanceData }) => {
  const data = {
    labels: ["Study Time", "Test Scores", "Weak Areas", "Readiness"],
    datasets: [
      {
        data: performanceData,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div>
      <h3>Student Performance Analysis</h3>
      <Pie data={data} />
    </div>
  );
};

export default Analysis;
