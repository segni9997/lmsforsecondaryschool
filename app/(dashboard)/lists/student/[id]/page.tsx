
import Announcements from "@/app/components/Anouncement";
import BigCalendar from "@/app/components/BigCalendar";
import FormModal from "@/app/components/FormModal";
import Performance from "@/app/components/Performance";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-primary bg-opacity-30 py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/assets/images/girl.jpeg"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-primary-content justify-between items-center flex">Ketoran Asrat {role === "teacer" && <BiEdit />}</h1>
               <FormModal
                  table="student"
                  type="update"
                  data={{
                    id: 1,
                    username: "studenytdd",
                    email: "deanguerrero@gmail.com",
                    password: "segniwwaaQ134.F",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
           
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
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
            {/* CARD */}
            <div className="bg-base-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-base-content">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm ">Grade</span>
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
                <h1 className="text-xl font-semibold">18</h1>
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
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm ">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-neutral p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-neutral">
            <Link className="p-3 rounded-md bg-sky-400" href={`/lists/lessons?classId=${2}`}>
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md  bg-yellow-500" href={`/lists/teachers?classId=${2}`}>
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-purple-500"href={`/lists/exams?classId=${6}`}>
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md  bg-sky-200"href={`/lists/assignments?classId=${2}`}>
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md  bg-orange-500"href={`/lists/results?studentId=${"student2"}`}>
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;