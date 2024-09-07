import { Data } from 'plotly.js';
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const DynamicChart: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([10, 15, 13, 17]); //Текущие точки

  const updateData = () => {
    setDataPoints(dataPoints.map(d => d + Math.floor(Math.random() * 10))); //имитация обновлений данных
  };

  const plotData: Data[] = [
    {
      x: [1, 2, 3, 4],
      y: dataPoints,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'green' },
    },
  ];

  const layout = {
    title: 'Динамическое обновление данных',
    xaxis: { title: 'X ось' },
    yaxis: { title: 'Y ось' },
  };

  return (
    <div>
      <Plot data={plotData} layout={layout} />
      <button onClick={updateData}>Обновить данные</button>
    </div>
  );
};

export default DynamicChart;
