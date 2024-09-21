import Image from 'next/image';
import RenderEpenseIncome from './RenderEpenseIncome';

const datas = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
   
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398,
   
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800,
  
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908,
  
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
   
  },
  {
    name: 'June',
    income: 2390,
    expense: 3800,
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300,
  },
];


const IncomeExpense = () => {
  return (
    <div className=' bg-slate-100 p-1 rounded-2xl'>
    {/* Title */}
  <div className=" flex justify-between items-center p-1 ">
    <h1 className='text-lg font-semibold'>Finance (Income/Expense) </h1>
    <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
  </div>
  {/* chart */}
  <div className="w-full h-[390px] justify-center">

    <RenderEpenseIncome data={datas} />

  </div>
 
</div>
  )
}

export default IncomeExpense
