import FormModal from '@/app/components/FormModal';
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch'
import { subjectsData, role } from '@/lib/data';
import prisma from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/settings';
import { Prisma, Subject, Teacher } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
type SubjectList = Subject &{teachers:Teacher[]}
  
  const columns = [
    {
      header: "Subject Names",
      accessor: "name",
    },
    {
      header: "Teachers",
      accessor: "teachers",
      className: "hidden md:table-cell",
    },
   
    {
      header: "Actions",
      accessor: "action",
    },
  ];
  const renderRow = (item:SubjectList)=>(   
  <tr  key={item.id}
    className="text-primary-content border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-accent"
  >
    <td className="flex items-center gap-3 p-3  pl-0 ">
      {/* <Image
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      /> */}

        <h3 className="font-semibold ">{item.name}</h3>
     
    </td>
    <td className="flex flex-col md:flex-row md:table-cell">{item.teachers.map(teacher => teacher.name).join(", ")}</td>
    <td>
      <div className="flex items-center gap-2">
      {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
      </div>
    </td>
  </tr>
)
   
const  SubjectListPage = async ({searchParams}:{searchParams:{[key:string]: string | undefined}}) => {

  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.SubjectWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
         
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const [subject, count] = await prisma.$transaction([
    prisma.subject.findMany({
      where:query,
      include: {
       teachers:true
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p-1)
    }),
    prisma.subject.count({
      where: query
    })
  ])

  
  return (
    <div className='flex flex-col h-screen p-3'>
        {/* Top  */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
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
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              //  </button>
              <FormModal table="subject" type="create"/>
            )}
          </div>
        </div>
      </div>
        {/* lists */}
        <div className="p-2">
          <Table columns={columns} renderRow={renderRow} data={subject}/>
        </div>
        {/* pagination */}
        <div className="items-center justify-center">
          <Pagination page={p} count={count}/>
        </div>
      
    </div>
  )
}

export default SubjectListPage
