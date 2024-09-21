
import Image from 'next/image';
import ChartCircle from './ChartCircle';


const data = [
  {
    name: 'Girls',
    count: 45,
    
    fill: 'secondary',
  },
  {
    name: 'Boys',
    count: 26,
   
    fill: 'orange',
  },
  {
    name: 'Total',
    count: 57,
   
    fill: 'white',
  },
 
];



const Countchart  = () => {
  return (
    <div className=' bg-slate-100 p-1 rounded-2xl'>
        {/* Title */}
      <div className=" flex justify-between items-center p-1 ">
        <h1 className='text-lg font-semibold'>Student</h1>
        <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
      </div>
      {/* chart */}
      <div className="w-full h-[300px] justify-center">
  <ChartCircle data={data}/>
       
      </div>
      {/* bottom */}
      <div className="flex flex-row p-3 justify-around items-center ">
        <div className="justify-center items-center  flex flex-col gap-1 ">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          
          <span className='font-medium text-primary-content'>123</span>
          <h1 className='text-gray-400'>Boys (45%)</h1>
        </div>
        <div className="justify-center items-center  flex flex-col gap-1 ">
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <span className='font-medium text-primary-content'>123</span>
          <h1 className='text-gray-400'>Girls (55%)</h1>
        </div>
      </div>
    </div>
  )
}

export default Countchart


