import { Bar } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  PointElement,
  LineElement
);

export const ExpectRateChart = () => {
  //임시 데이터
  const data = [
    { expectRate: 7, audienceNum: "6만명 미만" },
    { expectRate: 10, audienceNum: "8만명 미만" },
    { expectRate: 15, audienceNum: "8만명 이상" },
  ];

  //maxValue: 최대값
  const maxValue = Math.max(...data.map((item) => item.expectRate));

  //배경색
  const backgroundColor = ["#7B9FC9", "#4882C4", "#024CA1"];

  //차트 데이터
  const chartData = {
    labels: data.map((item) => item.audienceNum),
    datasets: [
      {
        yAxisID: "y",
        type: "bar" as const,
        label: "예상 수익률" as const,
        data: data.map((item) => item.expectRate),
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        borderWidth: 1,
        barThickness: 25,
      },
    ],
  };

  //옵션 설정
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        position: "left" as const,
        title: {
          display: true,
          text: "수익률(%)",
        },
        max: maxValue + 5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value: any, context: any) => {
          // 현재 데이터 포인트의 인덱스를 사용하여 time_count 값을 찾음
          const timeCount = data[context.dataIndex].expectRate;
          return timeCount + "%";
        },

        color: "black" as const,
        anchor: "end" as const,
        align: "top" as const,
      },
    },
  };

  return (
    <div>
      <Box pl={4} pr={7} py={7}>
        <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
      </Box>
    </div>
  );
};
