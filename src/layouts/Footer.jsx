import { Mail, MapPin, CodeXml } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[rgb(0,10,39)] text-white  px-[8%] py-5 flex flex-wrap item-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <CodeXml className="text-[#22D3EE] font-bold" size={26} />
          <p className="text-xl font-semibold">TechCamp</p>
        </div>
        <p>Learn. Build. Connect.</p>
      </div>

      <div>
        <h4 className="mb-2">Contact Us</h4>
        <div className="flex items-center gap-2">
          <Mail />
          <p>Hello@tachcamp.be</p>
        </div>

        <div className="flex items-center gap-2">
          <MapPin />
          <p>Brussels, Belgium</p>
        </div>

        <br />
        <p>&copy; 2026 TechCamp, All rights reserved.</p>
      </div>

      <div>
        <h4 className="mb-2">Follow Us</h4>
        <div className="flex items-center gap-4">
          <FaLinkedin size={24} className="hover:text-[#22D3EE] "/>
          <FaXTwitter size={24} className="hover:text-[#22D3EE]" />
          <FaYoutube size={24} className="hover:text-[#22D3EE] "/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
