import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
export default function Hero() {
    return (
        <section className="wrapper pt-10 grid place-items-center md:grid-cols-2 gap-4">
            <div className="grid space-y-5 text-center max-w-[500px]">
                <h1 className="text-6xl font-bold text-slate-800 md:text-left lg:text-8xl">Haz tus ideas realidad</h1>

                <p className="text-slate-500 md:text-xl md:text-left md:max-w-md lg:text-2xl">Dale rienda suelta a tu imaginacion y nosotros la transformamos en codigo</p>

                <div className="flex flex-col w-full items-center justify-center gap-4 py-5 md:flex-row md:justify-start">
                    <button className="flex gap-2 text-slate-600 text-sm">Proyectos <ArrowTopRightOnSquareIcon className="w-4" /></button>
                    <button className="botton shadow-lg shadow-primary/50 text-white font-bold text-sm hover:bg-violet-600 hover:shadow-violet-600/30 transition-colors">Contactar</button>
                </div>
            </div>

            <div className="max-w-[500px] hidden md:block">
                <img className="w-full" src="imagen.png" alt="Imagen" />
            </div>
        </section>
    )
}
