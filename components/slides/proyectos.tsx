"use client"

import { motion } from "motion/react"

export function Proyectos() {
  return (
    <div className="slide-content flex h-full flex-col justify-start px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-3xl font-bold text-white"
      >
        Proyectos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-lg text-white/60"
      >
        Sección en construcción. Próximamente estarán disponibles los proyectos destacados.
      </motion.p>
    </div>
  )
}
