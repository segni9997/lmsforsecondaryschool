import Announcements from '@/app/components/Anouncement'
import AttendanceChart from '@/app/components/AttendanceChart'
import ECalendar  from '@/app/components/Calendar'
import Countchart from '@/app/components/CountChart'
import EventCalendar from '@/app/components/EventCalendar'
import FinanceChart from '@/app/components/FinanceChart'
import IncomeExpense from '@/app/components/IncomeExpense'
import UserCard from '@/app/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 gap-4 flex flex-col md:flex-row  '>
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 overflow-auto h-screen">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <Countchart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px] gap-y-2 flex flex-col">
          <FinanceChart />

          
        </div>
        <div className="w-full h-[500px] gap-y-2 flex flex-col">
        <IncomeExpense />

          
        </div>
      </div>
      {/* right */}
      <div className=" rounded-2xl w-full lg:w-1/3  p-2  justify-center flex flex-col max-h-screen overflow-auto ">
    
        <ECalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage
