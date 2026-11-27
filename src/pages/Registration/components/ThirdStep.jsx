import { useContext } from "react"
import { multiStepContent } from "./StepContext"

function ThirdStep() {
  const {setStep, userData, setUserData,submitData} = useContext(multiStepContent)
      return (
        <div>
           <p className="text-[#22D3EE] text-sm font-semibold mb-4 text-center mt-2">Step 3 of 3</p>
           <h3 className=" text-white font-bold text-4xl mb-5 text-center">Review & Confirm</h3>
           <p className="text-gray-400 text-white font-bold mb-6 text-center">Please review your information before submitting.</p>
            <div className="flex flex-col gap-2 bg-[rgb(7,20,53)] text-white  rounded-xl shadow-sm shadow-[rgb(8,192,253)] p-4 mb-3 ">
                <div>
                  <p>Name:</p>
                  <p>{userData.name} </p>
                </div>

                <div>
                  <p>Email:</p>
                  <p>{userData.email} </p>
                </div>

                <div>
                  <p>Phone:</p>
                  <p>{userData.phone} </p>
                </div>

                <div>
                  <p>Track:</p>
                  <p>{userData.track} </p>
                </div>
                <button onClick={()=>setStep(2)}>Back </button>
                <button onClick={submitData}>Submit </button>
            </div>
        </div>
      )
    }


export default ThirdStep