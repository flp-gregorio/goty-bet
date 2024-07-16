import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { NomineeData } from '../@types/NomineeType';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

type WinnerComponentProps = {
    category: string;
    data: NomineeData[];
};

const WinnerComponent: React.FC<WinnerComponentProps> = ({ data }) => {
    const createChartData = () => {
        const labels = data.map(nominee => nominee.Nominee);
        const votes = data.map(nominee => nominee.Votes);

        const maxVotesIndex = votes.indexOf(Math.max(...votes));

        const colors = votes.map((_, index) => index === maxVotesIndex ? 'rgba(249, 115, 22, 0.8)' : 'rgba(194, 65, 12, 0.6)');

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Votes',
                    data: votes,
                    backgroundColor: colors,
                    borderColor: 'rgba(194, 65, 12, 1)',
                    borderWidth: 1,
                    barThickness: 40, 
                    maxBarThickness: 40, 
                },
            ],
        };
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 14,
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
