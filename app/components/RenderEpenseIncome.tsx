'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface chartData {
    name: string;
    income: number;
    expense:number;
}
const RenderEpenseIncome = ({data}: {data:chartData[]}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="income" stroke="#24341c" activeDot={{ r: 10 }} />
      <Line type="monotone" dataKey="expense" stroke="#ffa500 " />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default RenderEpenseIncome
