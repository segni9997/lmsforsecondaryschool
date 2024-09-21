import Image from 'next/image'
import React from 'react'
import FinanceCountChart from './FinanceCountChart';
const datas = [
    {
      month: 'Feb',
      Total: 4000,
      current: 2400,
      amt: 2400,
    },
    {
      month: 'Mar',
      Total: 4000,
      current: 1398,
      amt: 2210,
    },
    {
      month: 'Apr',
      Total: 4000,
      current: 3800,
      amt: 2290,
    },
    {
      month: 'May',
      Total: 4000,
      current: 3908,
      amt: 2000,
    },
    {
      month: 'Jun',
      Total: 4000,
      current: 800,
      amt: 2181,
    },
   
  ];
  
const FinanceChart = () => {
  return (
    <div className=' bg-slate-100 p-1 rounded-2xl'>
    {/* Title */}
  <div className=" flex justify-between items-center p-1 ">
    <h1 className='text-lg font-semibold'>Student Monthly Fee</h1>
    <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
  </div>
  {/* chart */}
  <div className="w-full h-[390px] justify-center">

    <FinanceCountChart data={datas} />

  </div>
 
</div>
  )
}

export default FinanceChart
