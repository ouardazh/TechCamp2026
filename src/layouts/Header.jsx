import { CodeXml } from "lucide-react"


function Header() {
  return (
    <header className="bg-[rgb(0,10,39)] text-white  px-[8%] py-5 flex item-center justify-between" >
        <div className="flex items-center gap-2">
            <CodeXml className="text-[#22D3EE] font-semibold"/>
            <p className='text-2xl font-semibold'>TechCamp</p>
        </div>

        <nav className="flex item-center gap-8" >
            <a href="">Home</a>
            <a href="">Tracks</a>
            <a href="">Coaches</a>
            <a href="">FAQS</a>
            <a href="">Contact</a>
        </nav>

        <button className='bg-[#0EA5FF] text-white rounded-3xl px-[18px] py-[8px] font-semibold'>Register Now</button>
    </header>
  )
}

export default Header