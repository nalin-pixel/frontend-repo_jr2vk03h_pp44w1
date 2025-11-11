import { useEffect, useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

function GlowBlob({ className, x, y, disabled = false, delay = 0 }) {
  if (disabled) {
    return <div className={className} />
  }
  return (
    <motion.div
      style={{ x, y, willChange: 'transform' }}
      initial={{ opacity: 0.25, scale: 0.98 }}
      animate={{ opacity: [0.25, 0.38, 0.25], scale: [0.98, 1.02, 1] }}
      transition={{ duration: 14, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={className + ' transform-gpu'}
    />
  )
}

export default function BackgroundFX() {
  const prefersReducedMotion = useReducedMotion()

  // Target values (set on mousemove), wrapped with springs for smooth, jank-free motion
  const tx1 = useMotionValue(0)
  const ty1 = useMotionValue(0)
  const tx2 = useMotionValue(0)
  const ty2 = useMotionValue(0)
  const tx3 = useMotionValue(0)
  const ty3 = useMotionValue(0)

  const x1 = useSpring(tx1, { stiffness: 80, damping: 18, mass: 0.6 })
  const y1 = useSpring(ty1, { stiffness: 80, damping: 18, mass: 0.6 })
  const x2 = useSpring(tx2, { stiffness: 78, damping: 20, mass: 0.8 })
  const y2 = useSpring(ty2, { stiffness: 78, damping: 20, mass: 0.8 })
  const x3 = useSpring(tx3, { stiffness: 82, damping: 16, mass: 0.5 })
  const y3 = useSpring(ty3, { stiffness: 82, damping: 16, mass: 0.5 })

  const parallaxRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const node = parallaxRef.current
    if (!node) return

    let raf = 0
    let latest = { x: 0, y: 0 }
    let needsUpdate = false

    const onMove = (e) => {
      latest.x = e.clientX
      latest.y = e.clientY
      needsUpdate = true
      if (!raf) tick()
    }

    const tick = () => {
      raf = 0
      if (!needsUpdate) return
      needsUpdate = false
      const rect = node.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (latest.x - cx) / rect.width
      const dy = (latest.y - cy) / rect.height
      // Set target values; springs handle smoothing (no animation queue buildup)
      tx1.set(dx * 20)
      ty1.set(dy * 20)
      tx2.set(-dx * 28)
      ty2.set(-dy * 28)
      tx3.set(dx * 12)
      ty3.set(-dy * 12)
    }

    const schedule = () => {
      raf = window.requestAnimationFrame(() => {
        tick()
        schedule()
      })
    }

    const start = () => {
      window.addEventListener('mousemove', onMove, { passive: true })
      schedule()
    }

    const stop = () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    start()
    return stop
  }, [prefersReducedMotion, tx1, ty1, tx2, ty2, tx3, ty3])

  const grainOpacity = useTransform(x1, [-30, 30], [0.035, 0.06])

  const grainDataUrl = useMemo(() => {
    const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>\n  <filter id='n'>\n    <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch' />\n    <feColorMatrix type='saturate' values='0'/>\n    <feComponentTransfer>\n      <feFuncA type='table' tableValues='0 0.3'/>\n    </feComponentTransfer>\n  </filter>\n  <rect width='100%' height='100%' filter='url(#n)' />\n</svg>`
    const encoded = encodeURIComponent(svg)
    return `url("data:image/svg+xml;utf8,${encoded}")`
  }, [])

  return (
    <div ref={parallaxRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(65%_60%_at_50%_0%,rgba(168,230,255,0.35),transparent),radial-gradient(45%_45%_at_90%_10%,rgba(180,255,220,0.35),transparent),radial-gradient(60%_60%_at_0%_20%,rgba(230,230,255,0.35),transparent)]" />

      {/* Organic floating glows */}
      <GlowBlob disabled={prefersReducedMotion} x={x1} y={y1} delay={0} className="absolute -top-20 left-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
      <GlowBlob disabled={prefersReducedMotion} x={x2} y={y2} delay={0.4} className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-emerald-300/25 blur-3xl" />
      <GlowBlob disabled={prefersReducedMotion} x={x3} y={y3} delay={0.8} className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Subtle grain for tactile feel; reduce blending on mobile to avoid overdraw */}
      <motion.div style={{ opacity: prefersReducedMotion ? 0.03 : grainOpacity }} className="absolute inset-0 mix-blend-overlay will-change-auto" aria-hidden>
        <div className="absolute inset-0" style={{ backgroundImage: grainDataUrl }} />
      </motion.div>
    </div>
  )
}
