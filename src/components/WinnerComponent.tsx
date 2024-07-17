import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { NomineeData } from "../@types/NomineeType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

type WinnerComponentProps = {
  category: string;
  data: NomineeData[];
};

const WinnerComponent = (props: WinnerComponentProps) => {
  const createChartData = () => {
    const labels = props.data.map((nominee) => nominee.Nominee.toUpperCase());
    const votes = props.data.map((nominee) => nominee.Votes);

    const maxVotesIndex = votes.indexOf(Math.max(...votes));

    const colors = votes.map((_, index) =>
      index === maxVotesIndex
        ? "rgba(249, 115, 22, 0.8)"
        : "rgba(194, 65, 12, 0.6)"
    );

    return {
      labels: labels,
      datasets: [
        {
          label: "Votes",
          data: votes,
          backgroundColor: colors,
          borderColor: "rgba(194, 65, 12, 1)",
          borderWidth: 1,
          barThickness: 40,
          maxBarThickness: 40,
        },
      ],
    };
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
          font: {
            size: 18, // Tamanho da fonte dos labels no eixo y
          },
        },
        grid: {
          display: false, // Remove a grade do eixo y
        },
      },
      x: {
        ticks: {
          display: false,
          font: {
            size: 18, // Tamanho da fonte dos labels no eixo x
          },
        },
        grid: {
          display: false, // Remove a grade do eixo x
        },
      },
    },
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        align: "end",
        anchor: "start",
        clamp: "true",
        font: {
          size: 20, // Tamanho da fonte dos labels dentro da barra
          family: "Barlow",
          weight: "bold",
        },
        formatter: (value: any, context: any) => {
          const nomineeName = context.chart.data.labels[context.dataIndex];
          return `${nomineeName}    ${value}`; // Nome do indicado no início e votos no final
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-transparent grid grid-cols-2 align-middle items-center px-10">
      <div className="text-right">
        <h1 className="text-white uppercase font-borlow text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni
          labore dolore ipsa nostrum nesciunt sint laboriosam, at dignissimos
          ducimus minima. Voluptatibus placeat animi, voluptatem similique
          numquam dicta magnam ut.
        </h1>
      </div>
      <div className="">
        <Bar data={createChartData()} options={options} />
      </div>
    </div>
  );
};

export default WinnerComponent;
