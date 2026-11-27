import { Code2, Palette, BrainCircuit } from "lucide-react";
const tracks = [
  {
    title: "Web Development",
    description: "Build modern web apps with cutting-edge technologies.",
    icon: Code2,
    features: ["React & Next.js", "Modern Web APIs", "Best Practices"],
    color: "blue",
    tag: "01",
    image: ""
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user experiences.",
    icon: Palette,
    features: ["User-Centered Design", "Prototyping", "Design Systems"],
    color: "violet",
    tag: "02",
    image: "",
  },
  {
    title: "Data & AI",
    description: "Explore data science and artificial intelligence.",
    icon: BrainCircuit,
    features: ["Machine Learning", "Data Analysis", "AI Applications"],
    color: "cyan",
    tag: "03",
    image: "",
  },
];
function Tracks() {
  return (
    <section className="px-[8%] py-8 md:py-16 lg:py-16 bg-[rgb(1,12,34)]">
      <div className="text-center mb-8 md:mb-16 lg:mb-16">
        <p className="text-[#22D3EE] text-sm font-semibold mb-4">OUR TRACKS</p>
        <h2 className=" text-white font-bold text-5xl mb-5">Choose Your <span className="text-[#22D3EE]">Track!</span></h2>
        <p className="text-gray-400 text-white font-bold">Dive into specialized tracks and level up your skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6  ">
        {tracks.map((track) => {
            const Icon = track.icon;
          return (
            <div style={{ backgroundImage:`url(${track.image})`}} key={track.tag} className="bg-cover text-white px-3 pb-4 rounded-xl shadow-sm shadow-[rgb(8,192,253)] hover:-translate-y-2 transition-all duration-300 " >
                <div className="text-[rgb(34,211,238)] rounded-xl p-3 w-fit">
                     <Icon size={40}/>
                </div>
             
              <h3 className="text-2xl py-2 font-semibold">{track.title}</h3>
              <p> {track.description} </p>
              {/* <ul>
                {track.features.map((feature)=>{
                    return(
                        
                            <li>{feature}</li>
                        
                    )
                })}
              </ul> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tracks;
