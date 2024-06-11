import BotonContacto from "./BotonContacto";

export default function Header() {

    return (
        <header>
            <nav className="h-20 flex wrapper items-center justify-between">
                <a href="#" className="flex-grow basis-0 text-xl font-semibold text-slate-800" >ideaForDev</a>

                <input type="checkbox" id="menu" className="peer hidden" />
                <label htmlFor="menu" className="z-50 bg-menu-open peer-checked:bg-menu-close w-8 h-8 bg-cover md:hidden"></label>

                <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 md:static md:translate-x-0 md:bg-none z-40 ">
                    <ul className="bg-white absolute items-center inset-x-0 w-[90%] mx-auto top-24 p-12 rounded-md shadow-lg text-center grid justify-items-center gap-6 md:static md:w-max md:bg-transparent md:shadow-none md:p-0 md:grid-flow-col">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><BotonContacto /></li>
                    </ul>
                </div>
                <div className="fixed -z-10 inset-0 right-0 blur-lg lg:hidden">
                    <img src="./fondo.jpg" alt="fondo" className="w-full" />
                </div>
            </nav>

        </header>
    )
}
