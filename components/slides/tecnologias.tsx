"use client"

import { motion } from "motion/react"

const groups = [
  { label: "Lenguajes", items: ["JavaScript", "Python", "Java", "Solidity"] },
  { label: "Frontend", items: ["Vue.js", "React", "Angular", "NuxtJS", "Svelte"] },
  { label: "Backend", items: ["Django", "FastAPI", "Spring", "Node.js"] },
  { label: "Bases de Datos", items: ["SQL", "MongoDB"] },
  { label: "Herramientas", items: ["Docker", "Git/GitHub", "Strapi"] },
]

export function Tecnologias() {
  return (
    <div className="slide-content flex h-full flex-col justify-start px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-3xl font-bold text-white"
      >
        Tecnologías
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 * gi }}
            className="border border-dotted p-5"
            style={{ borderColor: "color-mix(in srgb, var(--color-neon) 40%, transparent)" }}
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-neon)" }}>
              {group.label}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
