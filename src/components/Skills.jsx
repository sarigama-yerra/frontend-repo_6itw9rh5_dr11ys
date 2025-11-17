import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS / Tailwind', level: 92 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'Three.js', level: 80 },
  { name: 'GSAP', level: 78 },
  { name: 'Blender', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0a0a0b] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Compétences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-white/90 font-medium">{s.name}</p>
                <p className="text-white/60 text-sm">{s.level}%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={`${s.name}-bubble`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 120 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-4 text-center"
            >
              <p className="text-white text-sm">{s.name}</p>
              <div className="mt-2 text-lg font-semibold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{s.level}%</div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.18),transparent_40%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
