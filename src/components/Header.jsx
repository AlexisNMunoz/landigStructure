export default function Header() {

    return (
        <header className="fixed top-0 left-0 right-0">
            <nav className="h-20 flex wrapper items-center justify-between">
                <a href="#" className="flex-grow basis-0 text-xl text-slate-800" >tuLogoAquí</a>

                <input type="checkbox" id="menu" className="peer hidden" />
                <label htmlFor="menu" className="z-40 bg-menu-open peer-checked:bg-menu-close w-8 h-8 bg-cover md:hidden"></label>

                <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 md:static md:translate-x-0 md:bg-none">
                    <ul className="bg-white absolute items-center inset-x-0 w-[90%] mx-auto top-24 p-12 rounded-md shadow-lg text-center grid justify-items-center gap-6 md:static md:w-max md:bg-transparent md:shadow-none md:p-0 md:grid-flow-col">
                        <li><a className="hover:text-violet-700 transition-colors" href="#">Inicio</a></li>
                        <li><a className="hover:text-violet-700 transition-colors" href="#">Proyectos</a></li>
                        <li><a className="hover:text-violet-700 transition-colors" href="#">Skills</a></li>
                    </ul>
                </div>

                <div className="gap-4 flex-grow basis-0 justify-end items-center hidden lg:flex">
                    <a href="#" className="w-8 h-8">
                        <img src="/github.png" alt="github" />
                    </a>
                    <a href="#" className="w-8 h-8">
                        <img src="/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="#" className="w-8 h-8">
                        <img src="/xt.png" alt="linkedin" />
                    </a>
                </div>

            </nav>
        </header>
    )
}
