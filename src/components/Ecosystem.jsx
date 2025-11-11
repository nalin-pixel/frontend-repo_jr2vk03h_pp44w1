import { motion } from 'framer-motion'
import { Cpu, ThermometerSun, Droplets, Sprout, Beaker, Layers } from 'lucide-react'

const products = [
  {
    icon: Cpu,
    title: 'Ufarms Smart Controller',
    desc: 'The brain that connects sensors and actuators, running schedules and sensor logic.',
  },
  {
    icon: ThermometerSun,
    title: 'Climate Controller',
    desc: 'Maintains temperature and humidity with graceful precision.',
  },
  { icon: Droplets, title: 'Irrigation Scheduler', desc: 'Simple, reliable time-based watering.' },
  {
    icon: Layers,
    title: 'Drip Zone Controller',
    desc: 'Multi-zone irrigation control for large, distributed farms.',
  },
  { icon: Beaker, title: 'Dosing System (Hydroponics)', desc: 'Automatic EC and pH balance for nutrient tanks.' },
  { icon: Sprout, title: 'Vertical Farming Tower', desc: 'Modular system for leafy greens and herbs.' },
]

export default function Ecosystem() {
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">The Ufarms Ecosystem</h2>
          <p className="text-slate-700 mt-3">Clean hardware. Calm software. Everything works together.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-100/40 to-cyan-100/40" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-tr from-emerald-300/60 to-cyan-300/60 text-emerald-900/70 shadow-inner">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-slate-700 text-sm">{p.desc}</p>
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 h-32 w-32 rounded-3xl bg-white/70 border border-white/60"
                animate={{ rotate: [0, 8, -6, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
