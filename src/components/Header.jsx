
export default function Header() {


    return (
        <header>
            <nav className="h-20 flex wrapper items-center justify-between">
                <a href="#" className="flex-grow basis-0 text-xl uppercase" >Logo</a>

                <input type="checkbox" id="menu" className="peer hidden" />
                <label htmlFor="menu" className="z-50 md:hidden">Menu</label>

                <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 md:static md:translate-x-0 md:bg-none ">
                    <ul className="bg-white absolute inset-x-0 w-[90%] mx-auto top-24 p-12 rounded-md shadow-lg text-center grid gap-6 md:static md:w-max md:bg-transparent md:shadow-none md:p-0 md:grid-flow-col">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="basis-0 flex-grow justify-end hidden lg:flex">
                    <a href="#" className="botton text-white font-semibold shadow-md shadow-primary/50 hover:bg-violet-500 hover:shadow-violet-500/50 transition-colors">Contacto</a>
                </div>
            </nav>
        </header>
    )
}
