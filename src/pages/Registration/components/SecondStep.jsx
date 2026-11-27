import { useContext } from "react";
import { multiStepContent } from "./StepContext";

function SecondStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContent);
  return (
    <div>
      <p className="text-[#22D3EE] text-sm font-semibold mb-4 text-center mt-2">Step 2 of 3</p>
        <h3 className=" text-white font-bold text-4xl mb-5 text-center">Choose Your Track</h3>
        <p className="text-gray-400 text-white font-bold mb-6 text-center">Select the track that interests you most.</p>
      <form action="" className="flex flex-col gap-2 bg-[rgb(7,20,53)] text-white  rounded-xl shadow-sm shadow-[rgb(8,192,253)] p-4 mb-3 ">
        <label htmlFor="" className="flex items-center justify-between border-2 border-[rgb(20,39,95)] p-6 rounded-xl m-2">
          <div>
            <h3 className="text-[#22D3EE] text-xl font-semibold ">Web Development</h3>
            <p>Buid modemn web apps</p>
          </div>
          <input type="radio" name="track" value={userData.track} onChange={(e)=>setUserData({...userData, track: e.target.value})} />
        </label>

        <label htmlFor="" className="flex items-center justify-between border-2 border-[rgb(20,39,95)] p-6 rounded-xl m-2">

          <div>
            <h3 className="text-[#22D3EE] text-xl font-semibold ">UI/UX Design</h3>
            <p>Design better experiences</p>
          </div>
          <input type="radio" name="track"/>
        </label>

        <label htmlFor="" className="flex items-center justify-between border-2 border-[rgb(20,39,95)] p-6 rounded-xl m-2">
          <div>
            <h3 className="text-[#22D3EE] text-xl font-semibold ">Data & Al</h3>
            <p>Explore data & Al</p>
          </div>
          <input type="radio" name="track" />
        </label>

        <div className="flex gap-4 mx-3">
           <button className='bg-gray-400 text-white rounded-3xl px-[18px] py-[8px] font-semibold hover:bg-gray-700 mt-2 w-[100%] md:w-[20%] lg:w-[20%]' onClick={() => setStep(2)}>Back </button>
           <button className='bg-[#0EA5FF] text-white rounded-3xl px-[18px] py-[8px] font-semibold hover:bg-sky-700 mt-2 w-[100%] md:w-[20%] lg:w-[20%]' onClick={() => setStep(3)}>Next </button>
        </div>
       
      </form>
    </div>
  );
}

export default SecondStep;
