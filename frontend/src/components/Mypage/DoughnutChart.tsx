import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend
);

interface dataType {
  title: string;
  percent: number;
}

interface Props {
  data: dataType[];
}

export default function DoughnutChart({ data }: Props) {
  const Options = {
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

        bodyFont: {
          size: 15,
        },
      },
      datalabels: {
        color: "black" as const,
        anchor: "end" as const,
        clamp: true,
        clip: false,
        align: "end" as const,
        offset: 0,
        formatter: function () {
          return "";
        },
      },
    },
  };
  const Data = {
    labels: data.map((item) => item.title),
    datasets: [
      {
        data: data.map((item) => item.percent),
        backgroundColor: ["#013878", "#014BA0", "#B0C7E2", "#DBDDE0"],
        borderColor: ["#013878", "#014BA0", "#B0C7E2", "#DBDDE0"],
      },
    ],
  };

  return <Doughnut data={Data} options={Options}></Doughnut>;
}
