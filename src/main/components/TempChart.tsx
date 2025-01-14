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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TempChart = ({ retailSales, weekEnding }: any) => {
  // const generateNStrings = () => {
  //   return new Array(retailSales?.length).fill("");
  // };
  console.log({ retailSales });
  const data = {
    // labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels
    // labels: generateNStrings(),
    labels: weekEnding,
    datasets: [
      {
        // label: "Sales 2025", // Dataset label
        // data: [150, 200, 250, 220, 300, 400], // Y-axis data
        data: retailSales,
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill under the line
        // backgroundColor: null, // No background fill
        tension: 0.5, // Smoothness of the curve
      },
      // {
      //   // label: "Sales 2024",
      //   data: [100, 150, 200, 180, 250, 320],
      //   borderColor: "rgba(255, 99, 132, 1)",
      //   backgroundColor: "rgba(255, 99, 132, 0.2)",
      //   // backgroundColor: null, // No background fill
      //   tension: 0.5,
      // },
    ],
  };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top", // Legend position
  //     },
  //     title: {
  //       display: true,
  //       text: "Monthly Sales Data", // Chart title
  //     },
  //   },
  // };

  return <Line data={data} /*options={options}*/ />;
};

export default TempChart;
