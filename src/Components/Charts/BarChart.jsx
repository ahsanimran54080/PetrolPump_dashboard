import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "Aug"];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [200, 400, 600, 800, 1000, 1200, 1400, 1500], // Replace with your data
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [150, 300, 450, 600, 750, 900, 1050, 1700], // Replace with your data
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function BarChart({ items }) {
    return (
        <div className='Graphboxes'><Bar options={options} data={data} /></div>
    );
}
