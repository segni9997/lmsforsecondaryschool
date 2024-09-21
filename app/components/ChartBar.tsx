'use client'
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
interface ChartData {
    name: string;
    present: number;
    Absent:number
    amt: number;
  }
const ChartBar = ({data}:{data:ChartData[]}) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Legend  align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar legendType='circle' dataKey="present" fill="#82ca9d "  />
          <Bar legendType='circle'  dataKey="Absent" fill="#ffa500 "  />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default ChartBar
