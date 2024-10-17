import Announcements from "@/app/components/Anouncement";
import BigCalendar from "@/app/components/BigCalendar";
import FormModal from "@/app/components/FormModal";
import Performance from "@/app/components/Performance";
import { role } from "@/lib/data";
import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCalendar, BiEdit } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { MdBloodtype, MdEmail, MdOutlineBloodtype } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const SingleTeacherPage = () => {
 
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row ">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top section */}
        <div className="flex flex-col w-full lg:flex-row gap-4">
          {/* topchild */}
          <div className=" w-full bg-primary bg-opacity-30 py-6 px-2 rounded-md flex-1  flex gap-2 flex-row  ">
            {/* image container */}
            <div className=" w-1/3">
              <Image
                src="/assets/images/teacher2.jpeg"
                width={144}
                height={144}
                alt="teachersimages"
                className="lg:w-36 lg:h-36 rounded-full object-cover "
              />
            </div>
            {/* info container */}
            <div className="w-2/3 text-primary-content justify-between flex-col p-1">
              <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary-content justify-between items-center flex">Segni Asrat {role === "teacer" && <BiEdit />}</h1>
               <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "segniwwaaQ134.F",
                    firstName: "Segni",
                    lastName: "ASrat",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> {/* icons and lebel */}
            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium   ">
            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
            <Image src="/mail.png" alt="" width={14} height={14} /> <span className="md:text-xs ">keti.836@gmail.com</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <MdOutlineBloodtype className="text-xl text-primary-content "/> <h2 className="font-semibold ">A+</h2>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <BiCalendar className="text-xl text-primary-content "/> <h2 className="font-semibold "> January, 2025</h2>
              </div>
              
              <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                <BsPhone className="text-xl text-primary-content "/> <h2 className="font-semibold "> +251983604770</h2>
              </div>
            </div>
            </div>
           
          </div>
          {/*bottomchild */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
          <div className="bg-base-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-base-content">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm ">Attendance</span>
              </div>
            </div>
            <div className="bg-base-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-base-content">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm ">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-base-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-base-content">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm ">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-base-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-base-content">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm ">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-neutral p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-neutral">
            <Link className="p-3 rounded-md bg-sky-400" href={`/lists/classes?supervisorId=${"teacher12"}`}>
              Teacher&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-purple-500" href={`/lists/student?teacherId=${"teacher12"}`}>
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-yellow-500" href={`/lists/lessons?teacherId=${"teacher12"}`}>
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-orange-500" href={`/lists/exams?teacherId=${"teacher12"}`}>
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-sky-200" href={`/lists/assignments?teacherId=${"teacher12"}`}>
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements /> 
      </div>
    </div>
  );
};

export default SingleTeacherPage;
