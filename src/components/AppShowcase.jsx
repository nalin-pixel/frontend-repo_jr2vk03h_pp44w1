import { motion } from 'framer-motion'

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/60 bg-white/70 backdrop-blur p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-slate-600 mt-1">{label}</div>
    </div>
  )
}

export default function AppShowcase() {
  return (
    <section id="app" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-3 gap-3">
              <Stat label="Water Saved" value="27%" />
              <Stat label="Zones" value="12" />
              <Stat label="Online Devices" value="8" />
            </div>
            <p className="mt-6 text-slate-700 max-w-md">
              Live sensor dashboards, automation rules, and gentle alerts keep your farm balanced — without the noise. Designed for clarity and calm.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700 transition">Get Early Access</a>
              <a href="#about" className="px-5 py-3 rounded-xl bg-white/70 border border-white/60 backdrop-blur hover:bg-white transition">How it works</a>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-[440px] rounded-[28px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
              {/* Fake app UI */}
              <div className="relative z-10 p-6 grid gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold">Ufarms</div>
                  <div className="text-xs text-slate-600">Online</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Irrigation','Climate','Dosing','Zones'].map((x,i)=> (
                    <motion.div key={x} className="rounded-2xl border border-white/60 bg-white/70 p-4" animate={{ y: [0, -4, 0] }} transition={{ duration: 6 + i, repeat: Infinity }}>
                      <div className="text-sm text-slate-600">{x}</div>
                      <div className="mt-2 h-2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" />
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[18.6, '62%', '7.1pH'].map((x,i)=> (
                    <motion.div key={i} className="rounded-xl border border-white/60 bg-white/70 p-4" animate={{ opacity: [0.9, 1, 0.9] }} transition={{ duration: 4 + i, repeat: Infinity }}>
                      <div className="text-xs text-slate-600">{['Temp','Humidity','pH'][i]}</div>
                      <div className="text-xl font-semibold mt-1">{x}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
