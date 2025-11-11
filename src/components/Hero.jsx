import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-7">
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
            >
              Smart Farming Made Simple
            </motion.h1>
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="text-lg text-slate-700"
            >
              Monitor, automate, and optimize irrigation and climate — from anywhere. Calm technology that works like nature.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex gap-3">
              <a href="#products" className="px-5 py-3 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700 transition">Explore Ecosystem</a>
              <a href="#app" className="px-5 py-3 rounded-xl bg-white/70 border border-white/60 backdrop-blur hover:bg-white transition">See the App</a>
            </motion.div>
            <div className="flex gap-6 pt-4 text-sm text-slate-600">
              <div>Water-saving optimization</div>
              <div>Remote monitoring & alerts</div>
              <div>Multi-zone control</div>
            </div>
          </div>

          {/* Visual side */}
          <div className="lg:col-span-6 relative">
            {/* Floating device cards */}
            <div className="relative h-[420px]">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="absolute left-6 top-6 right-24 bottom-16 rounded-3xl bg-white/70 border border-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]" />
              <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="absolute right-0 top-0 h-40 w-40 rounded-3xl bg-gradient-to-br from-emerald-300/60 to-cyan-300/60 blur-2xl" />
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-4 -bottom-4 h-40 w-64 rounded-3xl bg-white/70 border border-white/60 backdrop-blur-xl shadow-xl" />
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute left-0 bottom-2 h-24 w-24 rounded-2xl bg-white/70 border border-white/60 backdrop-blur-xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
