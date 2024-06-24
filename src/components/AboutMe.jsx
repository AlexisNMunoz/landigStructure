export default function AboutMe() {
    return (
        <section className="h-screen flex justify-center items-center">
            <div className="wrapper pt-10 grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="space-y-4 bg-white  p-2 shadow-md rounded-md md:order-1">
                    <h2 className="text-4xl text-center md:text-left text-slate-800">Tu frase aqui</h2>
                    <p className="text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dignissimos quibusdam nobis!</p>
                    <p className=" text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dignissimos quibusdam nobis!</p>
                </div>

                <div>
                    <img src="/about.svg" alt="imagen" className="max-w-96 mx-auto" />
                </div>
            </div>
        </section>
    )
}
