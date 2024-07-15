import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { NomineeData } from '../@types/NomineeType';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${category} Nominee Votes Bar Chart`,
            },
        },
    };

    return (
        <div>
            <h2>Winner Component</h2>
            <h3>{category}</h3>
            <Bar data={createChartData()} options={options} />
        </div>
    );
};

export default WinnerComponent;
