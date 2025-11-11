import { motion } from 'framer-motion'
import { Leaf, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <motion.div initial={{ rotate: -10, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }} className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-tr from-emerald-300/70 to-cyan-300/70 shadow-inner">
                <Leaf className="h-5 w-5 text-emerald-900/70" />
              </motion.div>
              <div className="text-lg font-semibold tracking-tight">Ufarms</div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#products" className="hover:text-emerald-700 transition-colors">Products</a>
              <a href="#app" className="hover:text-emerald-700 transition-colors">App</a>
              <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
              <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/60 active:scale-95 transition">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
