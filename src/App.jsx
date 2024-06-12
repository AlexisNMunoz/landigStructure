import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="fixed -z-10 inset-0 right-0 blur-lg lg:hidden">
          <img src="./fondo.jpg" alt="fondo" className="w-full" />
        </div>

      </main>
    </>
  )
}

export default App
