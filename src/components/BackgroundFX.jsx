import { motion } from 'framer-motion'

function GlowBlob({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0.25, scale: 0.9 }}
      animate={{
        opacity: [0.25, 0.4, 0.25],
        scale: [0.9, 1.05, 0.95, 1],
        x: [0, 20, -10, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{ duration: 12, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={className}
    />
  )
}

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(168,230,255,0.35),transparent),radial-gradient(45%_45%_at_90%_10%,rgba(180,255,220,0.35),transparent),radial-gradient(60%_60%_at_0%_20%,rgba(230,230,255,0.35),transparent)]" />

      {/* Organic floating glows */}
      <GlowBlob delay={0} className="absolute -top-20 left-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      <GlowBlob delay={2} className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <GlowBlob delay={4} className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Subtle grain for tactile feel */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\n        <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\n          <filter id=\'n\'>\n            <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\' />\n            <feColorMatrix type=\'saturate\' values=\'0\'/>\n            <feComponentTransfer>\n              <feFuncA type=\'table\' tableValues=\'0 0.35\'/>\n            </feComponentTransfer>\n          </filter>\n          <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' />\n        </svg>' )' }} />
    </div>
  )
}
