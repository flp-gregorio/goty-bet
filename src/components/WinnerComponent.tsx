import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { NomineeData } from '../@types/NomineeType';
import { color } from 'chart.js/helpers';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

type WinnerComponentProps = {
    category: string;
    data: NomineeData[];
};

const WinnerComponent: React.FC<WinnerComponentProps> = ({ category, data }) => {
    const createChartData = () => {
        const labels = data.map(nominee => nominee.Nominee);
        const votes = data.map(nominee => nominee.Votes);

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Votes',
                    data: votes,
                    backgroundColor: 'rgba(249, 115, 22, 0.2)',
                    borderColor: 'rgba(194, 65, 12, 1)',
                    borderWidth: 1,
                    barThickness: 40, // Adjust bar thickness as needed
                    maxBarThickness: 40, // Adjust maximum bar thickness as needed
                },
            ],
        };
    };

    const options = {
        indexAxis: 'y', // Displaying labels on the y-axis
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 14, // Adjust font size if necessary
                        family: 'roboto',
                        weight: 'thin',
                    },
                },
            },
            x: {
                ticks: {
                    display: false,
                },
            },
        },
        plugins: {
            datalabels: {
                display: true,
                color: 'white',
                align: 'center',
                anchor: 'center',
                font: {
                    size: 14,
                    family: 'roboto',
                    weight: 'thin',
                },
                formatter: (value: any) => `${value}`, // Format the label value if needed
            },
            legend: {
                display: false,
            },
        },
    };


    return (
        <div className='bg-black flex flex-col text-center justify-center uppercase '>
            <div className=''>
                <Bar data={createChartData()} options={options} />
            </div>
        </div>
    );
};

export default WinnerComponent;
