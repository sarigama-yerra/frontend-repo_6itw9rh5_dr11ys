import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#0a0a0b] selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main className="[&>*]:scroll-mt-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} — Portfolio. Conçu avec passion et animations.
        </p>
      </footer>
    </div>
  )
}

export default App
