import { Code2, Palette, BrainCircuit } from "lucide-react";
const tracks = [
  {
    title: "Web Development",
    description: "Build modern web apps with cutting-edge technologies.",
    icon: Code2,
    features: ["React & Next.js", "Modern Web APIs", "Best Practices"],
    color: "blue",
    tag: "01",
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive and beautiful user experiences.",
    icon: Palette,
    features: ["User-Centered Design", "Prototyping", "Design Systems"],
    color: "violet",
    tag: "02",
  },
  {
    title: "Data & AI",
    description: "Explore data science and artificial intelligence.",
    icon: BrainCircuit,
    features: ["Machine Learning", "Data Analysis", "AI Applications"],
    color: "cyan",
    tag: "03",
  },
];
function Tracks() {
  return (
    <section className="px-[8%] py-16 bg-[rgb(1,12,34)]">
      <div className="text-center mx-auto" >
        <p className="font-semibold  text-[#22D3EE] ">
          OUR TRACKS
        </p>
        <h2 className="text-5xl font-semibold py-4 text-white">Choose Your <span className="text-[#22D3EE]">Track!</span></h2>
        <p className="text-white pt-1 pb-6">Dive into specialized tracks and level up your skills.</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-6  ">
        {tracks.map((track) => {
            const Icon = track.icon;
          return (
            <div key={track.tag} className="bg-[rgb(7,20,53)] text-white px-3 pb-4 rounded-xl shadow-sm shadow-[rgb(8,192,253)] hover:-translate-y-2 transition-all duration-300">
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
