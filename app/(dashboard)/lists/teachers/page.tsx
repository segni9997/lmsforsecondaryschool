import FormModal from '@/app/components/FormModal';
import Pagination from '@/app/components/Pagination'
import Table from '@/app/components/Table';
import TableSearch from '@/app/components/TableSearch'
import { role, teachersData } from '@/lib/data';
import prisma from '@/lib/prisma';
import { ITEM_PER_PAGE } from '@/lib/settings';
import { Class, Prisma, Subject, Teacher } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type  Teacherlist = Teacher & {subjects:Subject[]} &  {classes: Class[]}
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

  const renderRow = (item:Teacherlist )=>(   <tr  key={item.id}
    className=" border-b border-gray-200 even:bg-slate-50 text-primary-content text-sm hover:bg-accent"
  >
    <td className="flex items-center gap-3 p-3  pl-0 ">
      <Image
        src={item.img || "/avatar.png"}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.username}</td>
    <td className="hidden md:table-cell">{item.subjects.map(subjects=> subjects.name).join(",")}</td>
    <td className="hidden md:table-cell">{item.classes.map(classesitem =>classesitem.name).join(",")}</td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/lists/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-primary">
            <Image src="/view.png" alt="" width={16} height={16} />
          </button>
        </Link>
      
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-error">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
          <FormModal table="teacher" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
)
const TeachersListPage = async ({searchParams}:{searchParams:{[key:string]: string | undefined}}) => {

  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.TeacherWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lessons = {
              some: {
                classId: parseInt(value),
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const [teachers, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where:query,
      include: {
        subjects: true,
        classes:true
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p-1)
    }),
    prisma.teacher.count({
      where: query
    })
  ])


  
  return (
    <div className='flex flex-col h-screen p-3'>
        {/* Top  */}
        <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
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
              <FormModal table="teacher" type="create"/>
            )}
          </div>
        </div>
      </div>
        {/* lists */}
        <div className="p-2 ">
          <Table  columns={columns} renderRow={renderRow} data={teachers}/>
        </div>
        {/* pagination */}
        <div className="items-center justify-center">
        <Pagination page={p} count={count} />
        </div>
      
    </div>
  )
}

export default TeachersListPage
