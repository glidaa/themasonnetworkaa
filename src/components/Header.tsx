import { forwardRef } from "react"
import SLink from "@components/SLink"
import logo from "@/assets/logo.svg"

const Header = forwardRef<HTMLElement>((_, ref) => {
    return (
        <header className='wrapper bg-primary-red fixed left-0 right-0 z-20 shadow-lg' ref={ref}>
            <div className="flex flex-col items-center justify-center">
                <div className='container flex items-center gap-4 py-4'>
                    <SLink to='/'>
                        <img className="w-[250px]" src={logo} alt="The Mason Network" />
                    </SLink>
                </div>
                <nav className='wrapper bg-black text-white text-sm'>
                    <ul className="container flex gap-4 items-center">
                        <button className="px-2 py-3 hover:bg-[#333] transition-colors"><li>Home</li></button>
                        <button className="px-2 py-3 hover:bg-[#333] transition-colors"><li>Business</li></button>
                        <button className="px-2 py-3 hover:bg-[#333] transition-colors"><li>Entertainment</li></button>
                        <button className="px-2 py-3 hover:bg-[#333] transition-colors"><li>Politics</li></button>
                        <button className="px-2 py-3 hover:bg-[#333] transition-colors"><li>Sports</li></button>
                        <button className="px-2 py-3 hover:bg-[#333] transition-colors"><li>Health</li></button>
                    </ul>
                </nav>
            </div>
        </header>
    )
})

export default Header