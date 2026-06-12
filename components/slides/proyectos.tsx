"use client"

import { motion } from "motion/react"
import { BASE_PATH } from "@/lib/constants"


export function Proyectos() {
  return (
    <div className="slide-content relative flex h-full flex-col justify-start overflow-hidden px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${BASE_PATH}/logo-small.png)` }}
      />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-3xl font-bold text-white"
        >
          Proyectos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-2xl"
        >
          <p className="mb-8 text-lg leading-relaxed text-white/80">
            Se está desarrollando la organización de proyectos productivos para escenarios reales.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
