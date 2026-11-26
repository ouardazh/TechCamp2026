import {  } from "lucide-react"


function Header() {
  return (
    <header className="bg-[rgb(5,9,33)] text-white  px-[8%] py-5 flex item-center justify-between" >
        <div >
            <p className='text-2xl font-semibold'>TechCamp</p>
        </div>

        <nav className="flex item-center gap-8" >
            <a href="">Home</a>
            <a href="">Tracks</a>
            <a href="">Coaches</a>
            <a href="">FAQS</a>
            <a href="">Contact</a>
        </nav>

        <button className='bg-[rgb(118,68,247)] text-white rounded-3xl px-[18px] py-[8px]'>Register Now</button>
    </header>
  )
}

export default Header