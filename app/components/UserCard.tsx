import Image from "next/image"

const UserCard = ({type}: {type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-accent flex-1 even:bg-primary min-w-[130px] p-4">
    <div className="flex justify-between items-center">
    <span className="text-[10px] bg-white px-2 py-1 rounded-full  text-green-600">2024/25</span>
      <Image src="/more.png" alt="sf" width={20} height={20}/>
     
    </div>
    <h1>1,234</h1>
    <h1 className="capitalize text-sm font-medium text-gray-500">{type} </h1>
    </div>
  )
}

export default UserCard
