import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var gradient;

export const options = {
  responsive: true,
  scales: {
    xAxis: {
      ticks: {
        // maxTicksLimit: 3,
        // maxRotation: 0,
        // minRotation: 30,
      },
      grid: {
        display: false,
      },
    },
    yAxis: {
      ticks: {
        padding: 20,
        display: "right",
      },
      grid: {
        color: "rgba(0, 0, 0, 0)",
        display: false,
      },
      position: "right",
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
        pinch: {
          enabled: true,
        },
        mode: "x",
      },
      pan: {
        enabled: true,
        mode: "x",
      },
    },
    afterLayout: (chart) => {
      let ctx = chart.chart.ctx;
      ctx.save();
      let yAxis = chart.scales["y-axis-0"];
      let yBottom = yAxis.getPixelForValue(0);
      let dataset = chart.data.datasets[2];
      dataset.backgroundColor = dataset.data.map((v) => {
        let yTop = yAxis.getPixelForValue(v);
        let gradient = ctx.createLinearGradient(0, yBottom, 0, yTop);
        gradient.addColorStop(0.4, "#FFFFFF");
        gradient.addColorStop(1, "#acd7fa");
        return gradient;
      });
      ctx.restore();
    },
  },
  interaction: {
    mode: "index",
    axis: "xy",
    intersect: false,
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "index",
    intersect: false,
  },
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
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 45, 80, 65, 50],
      fill: true,
      borderColor: "rgba(178, 121, 247, 0.38)",
      tension: 0.1,
      // backgroundColor:
      //   "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
      backgroundColor: "rgba(178, 121, 247, 0.18)",
    },
  ],
};

export function Graph() {
  // useEffect(() => {
  //   var canvas = document.getElementById("canvas");
  //   var ctx = canvas.getContext("2d");
  //   var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  //   gradient.addColorStop(0, "rgba(10,10,10,.2)");
  //   gradient.addColorStop(1, "rgba(255,255,255,1)");
  // }, []);

  return <Line options={options} data={data} />;
}
