import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  datasets: [
    {
      label: "Phone Usage (seconds)",
      data: [
        3600, 1800, 2400, 5000, 6600, 4800, 3600, 3000, 4400, 5500, 6000, 5900,
        6200, 6400, 6700, 6900, 7200, 6500, 6200, 6100, 6000, 5800, 5500, 5300,
      ],
      fill: true,
      backgroundColor: "rgba(135, 206, 235, 0.2)",
      borderColor: "rgba(135, 206, 250, 1)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const PhoneUsageChart = () => (
  <div className="w-[95%] mx-auto my-0">
    <h1 className="font-semibold text-center text-2xl mt-5 mb-2">Hourly Phone Usage</h1>
    <Line data={data} options={options} />
  </div>
);

export default PhoneUsageChart;
