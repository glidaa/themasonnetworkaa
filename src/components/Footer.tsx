import SLink from "@components/SLink"
import logo from "@/assets/logo.svg"

const Footer = () => {
    return (
        <div className="wrapper py-8 mt-6 bg-primary-red">
            <div className="container grid grid-cols-3">
                <SLink to='./'>
                    <img className="w-[250px]" src={logo} alt="The Mason Network" />
                </SLink>
                <section>
                    <h3 className="text-lg font-[600]">Categories</h3>
                    <ul className="flex gap-3 mt-3 text-white">
                        <div className="flex flex-col gap-1 items-start">
                            <SLink className="hover:underline" to='/'><li>World</li></SLink>
                            <SLink className="hover:underline" to='/'><li>Local</li></SLink>
                            <SLink className="hover:underline" to='/'><li>Business</li></SLink>
                            <SLink className="hover:underline" to='/'><li>Entertainment</li></SLink>
                        </div>
                        <div className="flex flex-col gap-1 items-start">
                            <SLink className="hover:underline" to='/'><li>Politics</li></SLink>
                            <SLink className="hover:underline" to='/'><li>Sports</li></SLink>
                            <SLink className="hover:underline" to='/'><li>Health</li></SLink>
                        </div>
                    </ul>
                </section>

                <section>
                    <h3 className="text-lg font-[600]">Legal</h3>
                    <ul className="flex flex-col gap-1 items-start mt-3 text-white">
                        <SLink className="hover:underline" to='/legal/about'><li>About</li></SLink>
                        <SLink className="hover:underline" to='/legal/licensing'><li>Licencing</li></SLink>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Footer