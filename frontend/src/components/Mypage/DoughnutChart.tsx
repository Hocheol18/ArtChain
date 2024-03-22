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

export default function DoughnutChart() {
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
        formatter: function () {
          return "";
        },
      },
    },
  };
  const Data = {
    labels: ["모집 중", "정산 대기", "정산 완료", "모집 실패"],
    datasets: [
      {
        data: [40, 20, 35, 4],
        backgroundColor: ["#E7EFF8", "#B0C7E2", "#014BA0", "#DBDDE0"],
        borderColor: ["#E7EFF8", "#B0C7E2", "#014BA0", "#DBDDE0"],
      },
    ],
  };

  return <Doughnut data={Data} options={Options}></Doughnut>;
}
