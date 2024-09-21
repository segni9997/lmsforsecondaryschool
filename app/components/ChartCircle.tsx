'use client';

import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// Define the type for the data
interface ChartData {
  name: string;
  count: number;
  fill: string;
}

const ChartCircle = ({ data }: { data: ChartData[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%"  >
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="40%"
        outerRadius="100%"
        barSize={32}
        data={data}
      >
        <RadialBar
          
          background
          dataKey="count"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ChartCircle;
