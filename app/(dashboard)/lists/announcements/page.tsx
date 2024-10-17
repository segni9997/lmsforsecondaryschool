import FormModal from '@/app/components/FormModal';
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch'
import {  role, resultsData, announcementsData} from '@/lib/data';
import prisma from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/settings';
import { Announcement, Class, Prisma } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
type AnnouncementList = Announcement & {class:Class}
  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Description",
      accessor: "description",
      className: "hidden md:table-cell",

    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
    const renderRow = (item:AnnouncementList)=>(   <tr  key={item.id}
    className=" border-b border-gray-200 text-primary-content even:bg-slate-50 text-sm hover:bg-accent"
  >
    <td className="flex items-center gap-3 p-3  pl-0 ">
      {/* <Image
        src={item.photo}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      /> */}

        <h3 className="font-semibold">{item.title}</h3>
     
    </td>
    <td className="hidden  flex-col md:flex-row md:table-cell">{item.description}</td>
    <td className="flex flex-col md:flex-row md:table-cell">{item.class?.name}</td>

    <td className="flex flex-col md:flex-row md:table-cell">{new  Intl.DateTimeFormat("en-US").format(item.date)}</td>


    <td>
      <div className="flex items-center gap-2">
       
       
        {role === "admin" && (
            <>
              <FormModal table="announcement" type="update" data={item} />
              <FormModal table="announcement" type="delete" id={item.id} />
            </>
          )}
      </div>
    </td>
  </tr>
)
const  AnouncementListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.AnnouncementWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.title = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const [anouncement, count] = await prisma.$transaction([
    prisma.announcement.findMany({
      where: query,
      include: {
        // subjects: true,
        class:true
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.announcement.count({
      where: query,
    }),
  ]);
   
  
  return (
    <div className='flex flex-col h-screen p-3'>
        {/* Top  */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
              <FormModal table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>
        {/* lists */}
        <div className="p-2">
          <Table columns={columns} renderRow={renderRow} data={anouncement}/>
        </div>
        {/* pagination */}
        <div className="items-center justify-center">
          <Pagination page={p} count={count}/>
        </div>
      
    </div>
  )
}

export default AnouncementListPage
