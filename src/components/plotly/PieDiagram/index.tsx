import { Data } from 'plotly.js';
import React from 'react';
import Plot from 'react-plotly.js';

const PieChart: React.FC = () => {
  const data: Data[] = [
    {
      labels: ['Категория A', 'Категория B', 'Категория C'],
      values: [19, 100, 15],
      type: 'pie',
    },
  ];

  const layout = {
    title: 'Круговая диаграмма',
  };

  return <Plot data={data} layout={layout} />;
};

export default PieChart;
