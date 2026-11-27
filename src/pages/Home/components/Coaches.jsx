
const coaches = [
  {
    name: "Alex Morgan",
    role: "Senior Web Developer",
    description:
      "Passionate about building modern web applications and teaching React, JavaScript and clean code practices.",
    track: "Web Development",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    description:
      "Focused on creating intuitive user experiences, accessible interfaces and user-centered digital products.",
    track: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Adam Wilson",
    role: "Data & AI Engineer",
    description:
      "Explores machine learning, artificial intelligence and turning data into smart solutions.",
    track: "Data & AI",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Emma Rodriguez",
    role: "Tech Mentor & Startup Coach",
    description:
      "Helps students transform their ideas into projects and develop problem-solving skills.",
    track: "Innovation & Mentoring",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
  },
];


function Coaches() {
  return (
    <section className="px-[8%] py-16 bg-[rgb(1,12,34)]">
        <div className="text-center mb-16">
            <p className="text-sm text-[#22D3EE] font-semibold mb-4">OUR COACHES</p>
            <h2 className=" text-white font-bold text-5xl mb-5">Meet Our Expert Coaches</h2>
            <p className="text-gray-400 text-white font-bold mb-6">Learn from industry professionals and passionate educators.</p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6  ">
        {coaches.map((coach) => {
            const Icon= coach.icon
            
          return (
            <div  className="bg-[rgb(7,20,53)] text-white  rounded-xl shadow-sm shadow-[rgb(8,192,253)] overflow-hidden hover:-translate-y-2 transition-all duration-300">
                
              <div className="overflow-hidden h-60 w-full"> 
                <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src={coach.image} alt="" /> 
              </div>
              <div className="p-4">
                 <p className=" text-[#22D3EE] text-sm mb-1 "> {coach.track} </p>
              <h3 className="text-xl  font-semibold mb-1">{coach.name}</h3>
              <p className=" text-[#22D3EE] text-sm mb-3"> {coach.role} </p>
              <p className="text-sm"> {coach.description} </p>
              </div>
             
              
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Coaches