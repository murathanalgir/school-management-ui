import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-purple-400 even:bg-blue-500 p-4 flex-1 min-w-[130px]'>
        <div className="flex justify-between items-center">
            <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-700">24/25</span>
            <Image src="/more.png" width={20} height={20} alt=""  />
        </div>
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h2 className="capitalize text-sm font-medium text-white">{type}</h2>
    </div>
  )
}

export default UserCard