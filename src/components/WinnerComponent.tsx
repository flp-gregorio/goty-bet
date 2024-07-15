import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import jsonData from "../assets/data.json";
import { CategoriesData, NomineeData } from '../@types/NomineeType';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WinnerComponent: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>(Object.keys(jsonData)[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const createChartData = (category: keyof CategoriesData) => {
        const nominees: NomineeData[] = jsonData[category];
        const labels = nominees.map(nominee => nominee.Nominee);
        const data = nominees.map(nominee => nominee.Votes);

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Votes',
                    data: data,
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
                text: `${selectedCategory} Nominee Votes Bar Chart`,
            },
        },
    };

    return (
        <div>
            <h2>Winner Component</h2>
            <select onChange={handleChange} value={selectedCategory}>
                {Object.keys(jsonData).map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <div>
                <h3>{selectedCategory}</h3>
                <Bar data={createChartData(selectedCategory as keyof CategoriesData)} options={options} />
            </div>
        </div>
    );
};

export default WinnerComponent;
