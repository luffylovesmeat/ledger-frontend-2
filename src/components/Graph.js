import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = [
  "00.00",
  "01.00",
  "02.00",
  "03.00",
  "04.00",
  "05.00",
  "06.00",
  "07.00",
  "08.00",
  "09.00",
];

export const data = {
  labels,
  datasets: [
    {
      data: [
        0.00158, 0.00162, 0.0016, 0.00161, 0.00156, 0.00158, 0.00162, 0.00163,
        0.00159, 0.00161,
      ],
      borderColor: "#6E51E2",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function Graph() {
  return <Line options={options} data={data} />;
}
