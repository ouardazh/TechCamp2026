import { createContext, useState } from "react";
export const multiStepContent = createContext()

export default function StepContext({children}){
    const [currentStep, setStep]= useState(1);
    const [userData, setUserData]= useState({});
    const [finalData, setFinalData]=useState([]);
    
    function submitData(){
        setFinalData((data)=>[...data, setUserData])
        setUserData({})
        setStep(1)
        alert("Performance review submited")
    }

    return(
        <multiStepContent.Provider  value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
            {children}
        </multiStepContent.Provider>
    )
}