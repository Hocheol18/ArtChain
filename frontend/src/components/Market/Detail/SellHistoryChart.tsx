import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { getMarketChart } from "../../../api/market";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  ChartDataLabels
);

export default function SellHistoryChart() {
  const id = useParams() as { id: string };
  const today = new Date();
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    getMarketChart(Number(id.id)).then((res) => setValues(res.data.data));
  }, [id]);

  const labels: number[] = [];
  for (let i = 1; i <= 8; i++) {
    labels.push(today.getDate() - 7 + i);
  }

  const datas: number[] = [];
  values.forEach((res: any) => {
    datas.push(res.avgCoinPerPiece);
  });

  const datasets = {
    labels: labels,
    datasets: [
      {
        data: datas,
        fill: false,
        borderColor: "#014BA0",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: "linear" as const,
        position: "left" as const,
        grace: "5%" as const,
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },

    responsive: true,

    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        titleFont: { size: 20 },
        bodyFont: {
          size: 20,
        },
      },
      datalabels: {
        color: "black" as const,
        anchor: "end" as const,
        clamp: true,
        clip: false,
        align: "end" as const,
        offset: 0,
        formatter: function (value: number) {
          return value 
        },
      },
    },
  };

  return <Line options={options} data={datasets} />;
}
