import React from 'react'
import Image from 'next/image';
import ChartBar from './ChartBar';
const datas = [
    {
      name: 'Mon',
      present: 4000,
      Absent: 2400,
      amt: 2400,
    },
    {
      name: 'Tue',
      present: 3000,
      Absent: 1398,
      amt: 2210,
    },
    {
      name: 'Wed',
      present: 2000,
      Absent: 9800,
      amt: 2290,
    },
    {
      name: 'Thu',
      present: 2780,
      Absent: 3908,
      amt: 2000,
    },
    {
      name: 'Fri',
      present: 1890,
      Absent: 4800,
      amt: 2181,
    },
   
  ];
  
  
  
        
  
const AttendanceChart = () => {
  return (
    <div className=' bg-slate-100 p-1 rounded-2xl'>
    {/* Title */}
  <div className=" flex justify-between items-center p-1 ">
    <h1 className='text-lg font-semibold'>Attendance</h1>
    <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
  </div>
  {/* chart */}
  <div className="w-full h-[390px] justify-center">

    <ChartBar data={datas}/>
  </div>
 
</div>
  )
}

export default AttendanceChart

