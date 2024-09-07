import React from 'react';
import LineChart from './components/plotly/LineDiagram/index.tsx';
import BarChart from './components/plotly/BarDiagram/index.tsx';
import PieChart from './components/plotly/PieDiagram/index.tsx'
import DynamicChart from './components/plotly/DynamicDiagram/index.tsx'

function App() {
  return (
    <div>
      <LineChart/>
      <BarChart/>
      <PieChart/>
      <DynamicChart/>
    </div>
  );
}

export default App;
