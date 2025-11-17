import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#0a0a0b]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.15),transparent_60%)]" />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow"
            >
              Développeur Web & Designer 3D
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4 text-white/80 text-lg"
            >
              Je crée des expériences numériques immersives, fluides et performantes avec une esthétique sombre et futuriste.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 flex gap-3"
            >
              <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 transition hover:brightness-110">
                Voir mes projets
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                Me contacter
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
