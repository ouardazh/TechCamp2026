import { CodeXml } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[rgb(0,10,39)] text-white  px-[8%] py-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CodeXml className="text-[#22D3EE] font-bold" size={33} />
        <p className="text-2xl font-semibold">TechCamp</p>
      </div>

      {/* <nav className="flex items-center gap-8">
        <a href="">Home</a>
        <a href="">Tracks</a>
        <a href="">Coaches</a>
        <a href="">FAQS</a>
        <a href="">Contact</a>
      </nav> */}

      <nav className="flex items-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/tracks">Tracks</Link>
        <Link to="/coaches">Coaches</Link>
        <Link to="/faqs">FAQS</Link>
      </nav>

      <Link to="/registrationForm" className="bg-[#0EA5FF] text-white rounded-3xl px-[18px] py-[8px] font-semibold hover:bg-sky-700" >
        Register Now
      </Link>
    </header>
  );
}

export default Header;
