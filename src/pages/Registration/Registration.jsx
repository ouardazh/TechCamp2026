import FirstStep from "./components/FirstStep"
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { multiStepContent } from './components/StepContext';
import { useContext } from "react";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

function Registration() {

    const {currentStep}= useContext(multiStepContent);

    function showStep(step){
        switch (step){
            case 1:
                return <FirstStep/>;
                case 2 :
                    return <SecondStep/>;
                    case 3 :
                        return <ThirdStep/>;
                        default:
                            return null;
        }
    }
  return (
    <section className="px-[8%] py-16 bg-[rgb(1,12,34)] ">
        <div className="mx-auto w-[70%] ">
            <Stepper activeStep={currentStep -1} className="">
            <Step>
                <StepLabel></StepLabel>
            </Step>

             <Step>
                <StepLabel></StepLabel>
            </Step>

             <Step>
                <StepLabel></StepLabel>
            </Step>
        </Stepper>
        {showStep(currentStep)}
        </div>
        
    </section>
  )
}

export default Registration