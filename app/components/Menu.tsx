import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const menuItems =[
    {
        title:"MENU",
        items: [
            {
                icon:"/home.png",
                label:"Home",
                href:"/"
            },   
            {
                icon:"/teacher.png",
                label:"Teachers",
                href:"/teachers"
            },
            {
                icon:"/student.png",
                label:"Students",
                href:"/student"
            },   {
                icon:"/parent.png",
                label:"Parents",
                href:"/parents"
            },
         
        ]
    }, 
    {
        title:"OTHER",
        items:[
              {
                icon:"/profile.png",
                label:"Profile",
                href:"/profile"
            },
            {
                icon:"/setting.png",
                label:"Settings",
                href:"/settings"
            },
            {
                icon:"/logout.png",
                label:"Logout",
                href:"/logout"
            },
        ]
    }
]
const Menu = () => {
  return (
    <div className='my-2'>
      {menuItems.map(item => (
        <div className="flex flex-col gap-2" key={item.title}>
            <span className='hidden lg:block text-gray-500 font-light my-4  '>
                {item.title}
            </span>
            {item.items.map(i=>(
                <Link href={i.href} key={i.label} className='flex  items-center justify-center lg:justify-start gap-4 text-gray-400 my-2 font-bold'>
                    <Image src={i.icon} alt='icon' width={32} height={32} className=''/><span className='hidden lg:block'>{i.label}</span></Link>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
