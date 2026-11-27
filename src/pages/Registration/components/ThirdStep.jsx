import { useContext } from "react"
import { multiStepContent } from "./StepContext"
import {CircleCheck} from "lucide-react"

function ThirdStep() {
  const {setStep, userData, setUserData,submitData} = useContext(multiStepContent)
      return (
        <div>
           <p className="text-[#22D3EE] text-sm font-semibold mb-4 text-center mt-2">Step 3 of 3</p>
           <h3 className=" text-white font-bold text-4xl mb-5 text-center">Review & Confirm</h3>
           <p className="text-gray-400 text-white font-bold mb-6 text-center">Please review your information before submitting.</p>
            <div className="flex flex-col gap-2 bg-[rgb(7,20,53)] text-white  rounded-xl shadow-sm shadow-[rgb(8,192,253)] p-4 mb-3 ">
              <div className="text-[rgb(106,232,160)] flex justify-center items-center flex-col pb-2">
                <CircleCheck size={64} />
                <p className="text-xl md:text-3xl lg:text-5xl">Registration Successful!</p>
                
              </div>
              <p className="text-center pb-6">You're officially registered for TechCamp 2026.</p>



              <div className="">
                <div>
                  <p className="text-xl font-semibold ">Name:</p>
                  <p>{userData.name} </p>
                </div>

                <div>
                  <p className="text-xl font-semibold ">Email:</p>
                  <p>{userData.email} </p>
                </div>

                <div>
                  <p className=" text-xl font-semibold ">Phone:</p>
                  <p>{userData.phone} </p>
                </div>

                <div>
                  <p>Track:</p>
                  <p>{userData.track} </p>
                </div>
              </div>
                

                <div className="flex gap-4 mx-3">
                  <button className='bg-gray-400 text-white rounded-3xl px-[18px] py-[8px] font-semibold hover:bg-gray-700 mt-2 w-[100%] md:w-[20%] lg:w-[20%]' onClick={()=>setStep(2)}>Back </button>
                  <button className='bg-[#0EA5FF] text-white rounded-3xl px-[18px] py-[8px] font-semibold hover:bg-sky-700 mt-2 w-[100%] md:w-[20%] lg:w-[20%]' onClick={submitData}>Submit </button>
                </div>
                
            </div>
        </div>
      )
    }


export default ThirdStep