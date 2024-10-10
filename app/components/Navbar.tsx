import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 '>
      {/* search */}
      <div className="hidden sm:flex items-center gap-2 text-xs rounded-full ring-[1.5px] px-2 ring-gray-100">
        <Image src="/search.png" alt='search' width={14} height={14}/>
        <input type='text' placeholder='Search...' className='bg-gray-100 w-[400px] outline-none p-2 '/>
      </div>
      {/* icons and user */}
      <div className="  flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/message.png" alt='message' width={20} height={20}/>
<div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-secondary text-secondary-content text-xs rounded-full">5</div>

        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt='announcement' width={20} height={20}/>
<div className="absolute -top-3 -right-3 w-5 h-5 flex items-center text-xs justify-center bg-secondary text-secondary-content rounded-full">5</div>
        </div>
        <div className="flex flex-col ">
          <span className='text-xs leading-3 font-medium'>SegniAsrat</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>

        </div>
        <Image src="/avatar.png" alt='avatar' width={20} height={20} className='rounded-full cursor-pointer'/>

      </div>
      
    </div>
  )
}

export default Navbar
