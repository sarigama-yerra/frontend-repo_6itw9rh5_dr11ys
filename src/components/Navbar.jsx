import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'projects', label: 'Projets' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <button onClick={() => scrollTo('home')} className="text-white text-lg font-semibold tracking-wide">
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">FLAMES</span>
              <span className="text-white/60 ml-2">PORTFOLIO</span>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden text-white/90"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-white/80 hover:text-white py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
