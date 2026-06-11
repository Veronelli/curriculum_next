"use client"

import { useMemo } from "react"
import { motion } from "motion/react"

const COLS = 10
const ROWS = 6
const STAGGER = 0.004

const style = { willChange: "opacity, transform" as const }

export function PixelCurtain({
  phase,
  color,
  onCoverComplete,
  onRevealComplete,
}: {
  phase: "cover" | "reveal" | null
  color: string
  onCoverComplete?: () => void
  onRevealComplete?: () => void
}) {
  const pixels = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) => ({
        r: Math.floor(i / COLS),
        c: i % COLS,
      })),
    [],
  )

  if (!phase) return null

  const isEntering = phase === "cover"
  const targetOpacity = isEntering ? 1 : 0
  const targetScale = isEntering ? 1 : 0
  const total = pixels.length

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
      }}
    >
      {pixels.map((p, i) => (
        <motion.div
          key={i}
          style={{ ...style, backgroundColor: color }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: targetOpacity, scale: targetScale }}
          transition={{
            duration: 0.3,
            delay: (p.r + p.c) * STAGGER,
            ease: isEntering ? "easeOut" : "easeIn",
          }}
          onAnimationComplete={
            i === total - 1
              ? isEntering
                ? onCoverComplete
                : onRevealComplete
              : undefined
          }
        />
      ))}
    </div>
  )
}
