import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

function GlowBlob({ className, delay = 0, x, y }) {
  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0.25, scale: 0.9 }}
      animate={{
        opacity: [0.25, 0.4, 0.25],
        scale: [0.95, 1.05, 0.98, 1],
      }}
      transition={{ duration: 12, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={className}
    />
  )
}

export default function BackgroundFX() {
  const x1 = useMotionValue(0)
  const y1 = useMotionValue(0)
  const x2 = useMotionValue(0)
  const y2 = useMotionValue(0)
  const x3 = useMotionValue(0)
  const y3 = useMotionValue(0)

  const parallaxRef = useRef(null)

  useEffect(() => {
    const node = parallaxRef.current
    if (!node) return
    const handle = (e) => {
      const rect = node.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      animate(x1, dx * 20, { duration: 0.6 })
      animate(y1, dy * 20, { duration: 0.6 })
      animate(x2, -dx * 30, { duration: 0.8 })
      animate(y2, -dy * 30, { duration: 0.8 })
      animate(x3, dx * 12, { duration: 0.7 })
      animate(y3, -dy * 12, { duration: 0.7 })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [x1, y1, x2, y2, x3, y3])

  const grainOpacity = useTransform(x1, [-30, 30], [0.04, 0.07])

  return (
    <div ref={parallaxRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(168,230,255,0.35),transparent),radial-gradient(45%_45%_at_90%_10%,rgba(180,255,220,0.35),transparent),radial-gradient(60%_60%_at_0%_20%,rgba(230,230,255,0.35),transparent)]" />

      {/* Organic floating glows */}
      <GlowBlob x={x1} y={y1} delay={0} className="absolute -top-20 left-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      <GlowBlob x={x2} y={y2} delay={0.4} className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <GlowBlob x={x3} y={y3} delay={0.8} className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Subtle grain for tactile feel */}
      <motion.div style={{ opacity: grainOpacity }} className="absolute inset-0 mix-blend-overlay" aria-hidden>
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\n        <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\n          <filter id=\'n\'>\n            <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\' />\n            <feColorMatrix type=\'saturate\' values=\'0\'/>\n            <feComponentTransfer>\n              <feFuncA type=\'table\' tableValues=\'0 0.35\'/>\n            </feComponentTransfer>\n          </filter>\n          <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' />\n        </svg>' )' }} />
      </motion.div>
    </div>
  )
}
