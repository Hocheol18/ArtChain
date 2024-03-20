import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, CategoryScale);

export default function SellHistoryChart() {
  const today = new Date();
  const labels = [];

  for (let i = 1; i <= 7; i++) {
    labels.push(today.getDate() - 7 + i);
  }

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const datasets = {
    labels: labels,
    datasets: [
      {
        data: [2,3,10,3,3,5,8],
        fill: false,
        borderColor: "#014BA0",
        tension: 0.1,
      },
    ],
  };

  return <Line options={options} data={datasets} />;
}
