import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

function Particle({ index }) {
  const size = useMemo(() => Math.random() * 2 + 1, [])
  const left = useMemo(() => Math.random() * 100, [])
  const duration = useMemo(() => Math.random() * 12 + 8, [])
  const delay = useMemo(() => Math.random() * 6, [])

  return (
    <span
      style={{ left: `${left}%`, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
      className="pointer-events-none absolute -top-10 h-[2px] w-[2px] rounded-full bg-fuchsia-400/70 shadow-[0_0_8px_rgba(217,70,239,0.6)] animate-[fall_linear_infinite]"
    />
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // No backend sending in this demo; simulate success
    await new Promise((r) => setTimeout(r, 700))
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0b] py-28">
      <style>{`
        @keyframes fall { to { transform: translateY(110vh); opacity: 0; } }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-white/70">Parlons de votre prochain projet.</p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-white">
              <p className="text-xl">Merci ! Votre message a été envoyé.</p>
              <p className="text-white/70 mt-2">Je reviens vers vous rapidement.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm text-white/70">Nom</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="vous@domaine.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-white/30 outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="Décrivez votre idée..."
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/50">Je réponds sous 24h — Paris UTC+1</p>
                <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 ring-1 ring-white/10 transition hover:brightness-110">
                  Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
