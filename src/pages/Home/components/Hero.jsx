import { CalendarRange } from "lucide-react";
import { MapPin } from "lucide-react";


function Hero() {
  return (
    <section className="flex items-center bg-[url('src/assets/img/image1.png')] bg-cover bg-center h-[400px]">
      <div className="px-[8%] py-5">
        <h1 className="text-7xl text-white font-semibold">TechCamp <span className="text-[#22D3EE]">2026</span></h1>
        <h2 className="text-2xl text-[#22D3EE] py-3">Learn. Build. Grow.</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-white py-2">
            <CalendarRange className="text-[#22D3EE]" />
            <p>March 14-16, 2026</p>
          </div>

          <div className="flex items-center gap-2 text-white py-2">
            <MapPin className="text-[#22D3EE]" />
            <p>Brussels</p>
          </div>

          
        </div>
        <p className="text-white">A 3-day coding bootcamp to boost your skills, <br />meet industry experts and be part of a tech community.</p>

        <button className="bg-[#0EA5FF] text-white rounded-3xl px-[18px] py-[8px] my-6 font-semibold">Register now</button>
      </div>
      
    </section>
  );
}

export default Hero;
