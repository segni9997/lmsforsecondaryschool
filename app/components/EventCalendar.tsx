
import Image from 'next/image'
import { ECalendar } from './Calendar'

const EventCalendar = () => {
  return (
    <div className=' bg-slate-100 p-1 rounded-2xl'>
    {/* Title */}
  <div className=" flex justify-between items-center p-1 ">
    <h1 className='text-lg font-semibold'>Event Calendar</h1>
    <Image src="/moreDark.png" alt='moreDark' width={20} height={20} />
  </div>
  {/* chart */}
  <div className="w-full h-[250px] flex flex-col gap-8">
    <ECalendar/>
  </div>
 
</div>
  )
}

export default EventCalendar
