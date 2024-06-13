import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"
import BotonContacto from "./BotonContacto"
export default function Hero() {
    return (
        <section className="wrapper grid pt-20 place-items-center md:grid-cols-2 gap-4 h-screen">
            <div className="grid space-y-5 text-center max-w-[500px] animate-fill-backwards animate-fade-up md:animate-fade-right">
                <h1 className="text-6xl font-bold text-slate-800 md:text-left lg:text-8xl">¡Haz tus <span className="text-primary">ideas</span> realidad!</h1>

                <p className="text-slate-900 p-2 rounded-md md:text-xl md:text-left md:max-w-md lg:text-2xl">Dale rienda suelta a tu imaginación y nosotros la transformamos en código.</p>

                <div className="flex flex-col w-full items-center justify-center gap-4 py-5 md:flex-row md:justify-start">
                    <button className="flex gap-2 text-slate-900 text-sm hover:text-violet-600">Proyectos <ArrowTopRightOnSquareIcon className="w-4" /></button>
                    <BotonContacto />
                </div>

            </div>

            <div className="max-w-[500px] hidden md:block animate-fill-backwards animate-fade-left ">
                <img className="w-full" src="imagen.png" alt="Imagen" />
            </div>

        </section>
    )
}
