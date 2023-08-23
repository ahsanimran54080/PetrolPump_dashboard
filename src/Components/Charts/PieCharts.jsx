import React from 'react';
// import './index.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Black', 'Red', 'Green', 'LightGreen', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'black',
                '#c44e4e',
                '#22b3a2',
                '#9dbb56',
                '#4b81bd',
                '#ed6e1e',
            ],
            borderColor: [
                'black',
                '#c44e4e',
                '#22b3a2',
                '#9dbb56',
                '#4b81bd',
                '#ed6e1e',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart() {
    return <div className='Graphboxes'><Pie data={data} /></div>;
}
