import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import BotonContacto from "./BotonContacto"
export default function Hero() {
    return (
        <section className=" wrapper pt-10 grid place-items-center md:grid-cols-2 gap-4">
            <div className="grid space-y-5 text-center max-w-[500px] animate-fade-right animate-delay-300">
                <h1 className="text-6xl font-bold text-slate-800 md:text-left lg:text-8xl">¡Haz tus <span className="text-primary">ideas</span> realidad!</h1>

                <p className="text-slate-500 md:text-xl md:text-left md:max-w-md lg:text-2xl">Dale rienda suelta a tu imaginación y nosotros la transformamos en código</p>

                <div className="flex flex-col w-full items-center justify-center gap-4 py-5 md:flex-row md:justify-start">
                    <button className="flex gap-2 text-slate-600 text-sm hover:text-violet-600">Proyectos <ArrowTopRightOnSquareIcon className="w-4" /></button>
                    <BotonContacto />

                </div>
            </div>

            <div className="max-w-[500px] hidden md:block  animate-fade-left animate-delay-300">
                <img className="w-full" src="imagen.png" alt="Imagen" />
            </div>

        </section>
    )
}
