import { useState } from "react";

const faq = [
  {
    question: "How much does TechCamp 2026 cost?",
    answer:
      "TechCamp 2026 is free to attend. Registration is required because seats are limited.",
  },
  {
    question: "Do I need experience to participate?",
    answer:
      "No previous experience is required. Beginners are welcome, and activities are designed for different skill levels.",
  },
  {
    question: "What is the schedule?",
    answer:
      "The event takes place from March 14 to March 16, 2026, with workshops, learning sessions, team activities, and networking.",
  },
  {
    question: "Where will the event take place?",
    answer:
      "TechCamp 2026 will take place in Brussels, Belgium. The exact venue details will be shared with registered participants.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, notebook, and curiosity. Everything else you need for the workshops will be provided.",
  },
  {
    question: "Can I choose my track?",
    answer:
      "Yes! You can choose one track during registration: Web Development, UI/UX Design, or Data & AI.",
  },
];

function Faq() {
  const [active, setActive] = useState(null);
  return (
    <section className="px-[8%] py-16 bg-[rgb(1,12,34)]">

      <div className="text-center mb-16">
        <p className="text-[#22D3EE] text-sm font-semibold mb-4">FAQ</p>
        <h2 className=" text-white font-bold text-5xl mb-5">Frequently Asked <span className="text-[#22D3EE]">Questions</span></h2>
        <p className="text-gray-400 text-white font-bold">Everything you need to know about TechCamp 2026.</p>
      </div>



      {faq.map((item, index) => {
        return (
          <div className="bg-[rgb(7,20,53)] text-white  rounded-xl shadow-sm shadow-[rgb(8,192,253)] p-4 mb-3">
            <div onClick={() => setActive(active === index ? null : index)}>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold"> {item.question} </p>
                 <p className="text-xl font-bold"> {active === index ? "-" : "+"} </p>
              </div>
              
            </div>
              {active === index && <div className="bg-[#22D3EE] rounded-xl py-3 px-5 mt-3 text-medium font-semibold">{item.answer} </div>}
            
          </div>
        );
      })}
    </section>
  );
}

export default Faq;

