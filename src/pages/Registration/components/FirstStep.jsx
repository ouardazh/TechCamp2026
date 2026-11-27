import { useContext } from "react"
import { multiStepContent } from "./StepContext"

function FirstStep() {
    const {setStep, userData, setUserData} = useContext(multiStepContent)
  return (
    <div >
        <p className="text-[#22D3EE] text-sm font-semibold mb-4 text-center mt-2">Step 1 of 3</p>
        <h3 className=" text-white font-bold text-4xl mb-5 text-center">Personal Information</h3>
        <p className="text-gray-400 text-white font-bold mb-6 text-center">Fill in your details to get started.</p>
        <form action="" className="flex flex-col gap-2 bg-[rgb(7,20,53)] text-white  rounded-xl shadow-sm shadow-[rgb(8,192,253)] p-4 mb-3 ">
            <label htmlFor="" className="text-gray-400 text-white font-semibold">Full Name</label>
            <input className="bg-[rgb(0,10,39)] text-white rounded-xl  p-4 mb-3" type="text" placeholder='Enter your name' value={userData.name} onChange={(e)=>setUserData({...userData, name: e.target.value})}/>
            

            <label htmlFor="" className="text-gray-400 text-white font-semibold">Email Address</label>
            <input className="bg-[rgb(0,10,39)] text-white  rounded-xl  p-4 mb-3" type="email" placeholder='****@mail.com' value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})}/>
            

            <label htmlFor="" className="text-gray-400 text-white font-semibold">Phone Number</label>
            <input className="bg-[rgb(0,10,39)] text-white  rounded-xl  p-4 mb-3" type="tel" placeholder='+32 00000000'  value={userData.phone} onChange={(e)=>setUserData({...userData, phone: e.target.value})}/>
            
            
            <button className='bg-[#0EA5FF] text-white rounded-3xl px-[18px] py-[8px] font-semibold hover:bg-sky-700 mt-2 w-[20%]' onClick={()=>setStep(2)}>Next </button>
        </form>
    </div>
  )
}

export default FirstStep