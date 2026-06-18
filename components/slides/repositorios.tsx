"use client"

import { motion } from "motion/react"
import { LinkPreview } from "@/components/link-preview"

export function Repositorios() {
  return (
    <div className="slide-content flex h-full flex-col justify-start px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-3xl font-bold text-white"
      >
        Repositorios
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="max-w-md"
      >
        <p className="mb-4 text-lg text-white/60">
          Vinculación con GitHub pendiente. Próximamente se listarán los repositorios.
        </p>
        <LinkPreview url="https://github.com/Veronelli" />
      </motion.div>
    </div>
  )
}
