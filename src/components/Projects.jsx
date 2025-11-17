import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neo Interface',
    image: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=1640&auto=format&fit=crop',
    tags: ['WebGL', 'UX Motion'],
  },
  {
    title: 'Astral Brand',
    image: 'https://images.unsplash.com/photo-1672816936095-ce83c5edb06e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBc3RyYWwlMjBCcmFuZHxlbnwwfDB8fHwxNzYzMzkzNzkzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['3D', 'Branding'],
  },
  {
    title: 'Quantum Lab',
    image: 'https://images.unsplash.com/photo-1642796418561-88ab301fcdf9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxRdWFudHVtJTIwTGFifGVufDB8MHx8fDE3NjMzOTM3OTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tags: ['React', 'GSAP'],
  },
  {
    title: 'Cyber Motion',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1640&auto=format&fit=crop',
    tags: ['Animation', '3D'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0a0a0b] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projets</h2>
          <p className="text-white/60 text-sm">Sélection de travaux — survoler pour interagir</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:contrast-125" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
