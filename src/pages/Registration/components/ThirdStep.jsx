import { useContext } from "react"
import { multiStepContent } from "./StepContext"

function ThirdStep() {
  const {setStep, userData, setUserData,submitData} = useContext(multiStepContent)
      return (
        <div>
            <form action="">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Enter your name'/>
                <br />
    
                <label htmlFor="">Email Address</label>
                <input type="email" placeholder='****@mail.com' />
                <br />
    
                <label htmlFor="">Phone Number</label>
                <input type="tel" placeholder='+32 00000000' />
                <br />
                <button onClick={()=>setStep(2)}>Back </button>
                <button onClick={submitData}>Submit </button>
            </form>
        </div>
      )
    }


export default ThirdStep