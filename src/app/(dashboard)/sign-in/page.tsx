import { Form } from "react-hook-form"

const LoginPage = () => {
  return (
    <div className='flex items-center w-[1920px] h-[1080px] bg-[#1f2021] text-white'>
      <div className="bg-[#0e0e0e] mt-18 ml-48 box-border h-[402px] w-[1145px] border-4 black">

        

        <form className="flex grid grid-cols w-24 ml-[735px] mt-[150px] bg-black box-border">
          <input type="email" placeholder="E-mail" className="bg-[#0e0e0e]"></input>
          <input type="passw" placeholder="Password" className="hidden"></input>
          <button className="bg-[#2447f2] text-white w-36 rounded-full ">Submit</button>
        </form>
      </div>
      <div className="mt-[150px] text-white">Welcome to SchoolMrthn</div>
    </div>
  )
}

export default LoginPage
