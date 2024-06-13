import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />

        <div className="fixed h-full -z-10 inset-0  blur-lg">
          <img src="./fondolg.png" alt="fondo" className="w-full object-cover h-full" />
        </div>

      </main>
    </>
  )
}

export default App
