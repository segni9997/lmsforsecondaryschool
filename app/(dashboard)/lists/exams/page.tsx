import FormModal from '@/app/components/FormModal';
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch'
import {  role, examsData} from '@/lib/data';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
type Exams = {
    id: number;
    subject: string;
    class:string;
    teacher:string;
    date:string;
  };
  
  const columns = [
    {
      header: "Subject Name",
      accessor: "subject",

    },     {
        header: "Class",
        accessor: "class",

      },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },

 
     
    {
      header: "Actions",
      accessor: "action",
    },
  ];

const  ExamsListPage = () => {
  const renderRow = (item:Exams)=>(   <tr  key={item.id}
    className=" border-b border-gray-200 even:bg-slate-50 text-primary-content text-sm hover:bg-accent"
  >
    <td className="flex items-center gap-3 p-3  pl-0 ">
      {/* <Image
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      /> */}

        <h3 className="font-semibold">{item.subject}</h3>
     
    </td>
    <td className="flex flex-col md:flex-row md:table-cell">{item.class}</td>

    <td className="flex flex-col md:flex-row md:table-cell">{item.teacher}</td>
    <td className="flex flex-col md:flex-row md:table-cell">{item.date}</td>

    <td>
      <div className="flex items-center gap-2">
      {role === "admin" && (
            <>
              <FormModal table="exam" type="update" data={item} />
              <FormModal table="exam" type="delete" id={item.id} />
            </>
          )}
      </div>
    </td>
  </tr>
)
   
  
  return (
    <div className='flex flex-col h-screen p-3'>
        {/* Top  */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
           
            {role === "admin" && (
              <FormModal table="exam" type="create" />
            )}
          </div>
        </div>
      </div>
        {/* lists */}
        <div className="p-2">
          <Table columns={columns} renderRow={renderRow} data={examsData}/>
        </div>
        {/* pagination */}
        <div className="items-center justify-center">
          <Pagination/>
        </div>
      
    </div>
  )
}

export default ExamsListPage
