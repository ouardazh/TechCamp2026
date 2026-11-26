import { 
    Mail, 
    MapPin,
 } from "lucide-react"
import { FaXTwitter, FaLinkedin, FaYoutube} from "react-icons/fa6";



function Footer() {
  return (
    <footer className="bg-[rgb(0,10,39)] text-white  px-[8%] py-5 flex item-center justify-between" >
        <div>
            <p className='text-2xl font-semibold'>TechCamp</p>
            <p>Learn. Build. Connect.</p>
        </div>

        <div>
            <h4>Contact Us</h4>
            <div className="flex items-center gap-2">
                <Mail/>
                <p>Hello@tachcamp.be</p>
            </div>

            <div className="flex items-center gap-2">
                <MapPin/>
                <p>Brussels, Belgium</p>
            </div>
            
            
            
            <br />
            <p>&copy; 2026 TechCamp, All rights reserved.</p>
        </div>

        <div>
            <h4>Follow Us</h4>
            <div className="flex items-center gap-2">
                <FaLinkedin />
                <FaXTwitter />
                <FaYoutube/>
            </div>

        </div>
    </footer>
  )
}

export default Footer