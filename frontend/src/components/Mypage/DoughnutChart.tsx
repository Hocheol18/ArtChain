import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  ArcElement
);

export default function DoughnutChart() {
  const Data = {
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [40, 20, 35, 4],
        backgroundColor: ["#E7EFF8", "#B0C7E2", "#014BA0", "#DBDDE0"],
        borderColor: ["#E7EFF8", "#B0C7E2", "#014BA0", "#DBDDE0"],
      },
    ],
  };
  const Options = {
    
  };
  return <Doughnut data={Data} options={Options}></Doughnut>;
}
