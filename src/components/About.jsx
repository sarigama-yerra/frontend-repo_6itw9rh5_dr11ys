import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])

  return (
    <section id="about" ref={ref} className="relative bg-[#0a0a0b] py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div style={{ y }} className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.25),transparent_50%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.2),transparent_55%)]" />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop"
                alt="Portrait stylisé"
                className="h-full w-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>
          </div>
        </motion.div>

        <motion.div style={{ scale }} className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white">À propos</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Passionné par l’animation, le web et la 3D, je conçois des interfaces premium où esthétique et performance se rencontrent. 
            J’utilise React, WebGL et Blender pour donner vie à des expériences immersives et élégantes.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/70">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-white font-semibold">8+ ans</p>
              <p>Expérience</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-white font-semibold">30+ projets</p>
              <p>Livrés</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-white font-semibold">3D / Web</p>
              <p>Expertises</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-white font-semibold">Remote</p>
              <p>Monde entier</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
