import React from 'react';
import ChartBar from './ChartBar';

import './style.css';

const Chart = (props) => {
  const values = props.dataPoints.map((data) => data.value);
  const totalMax = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
