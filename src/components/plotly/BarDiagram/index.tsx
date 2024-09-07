import { Data } from 'plotly.js';
import React from 'react';
import Plot from 'react-plotly.js';

const BarChart: React.FC = () => {
  const data: Data[] = [
    {
      x: ['Категория A', 'Категория B', 'Категория C'],
      y: [20, 14, 23],
      type: 'bar',
      marker: { color: 'blue' },
    },
  ];

  const layout = {
    title: 'Столбчатая диаграмма',
    xaxis: { title: 'Категории' },
    yaxis: { title: 'Значения' },
  };

  return <Plot data={data} layout={layout} />;
};

export default BarChart;
