import Announcements from "@/app/components/Anouncement";
import BigCalendar from "@/app/components/BigCalendar";
import ECalendar from "@/app/components/Calendar";


const TeacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full h-screen xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md overflow-y-auto overflow-x-clip">
          <h1 className="text-xl font-semibold ">Schedule (5A)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className=" rounded-2xl w-full lg:w-1/3  p-2   flex flex-col max-h-screen overflow-auto ">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;