import { Data } from 'plotly.js';
import React from 'react';
import Plot from 'react-plotly.js';

const LineChart: React.FC = () => {
  const data: Data[] = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      mode: 'number',
      marker: { color: 'red' },
    },
  ];

  const layout = {
    title: 'Линейная диаграмма',
    xaxis: { title: 'время' },
    yaxis: { title: 'Температура' },
  };

  return <Plot data={data} layout={layout} />;
};

export default LineChart;
