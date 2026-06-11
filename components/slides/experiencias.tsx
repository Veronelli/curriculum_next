"use client"

import { motion } from "motion/react"

const experiences = [
  {
    company: "Grupo Simpli (SimpliMuv)",
    role: "Full-Stack Developer",
    period: "Jul 2022 - Actualidad",
    desc: "Django, FastAPI, NuxtJS. Mantenimiento de servicios y frontend.",
  },
  {
    company: "SimpliTEC",
    role: "Full-Stack Developer",
    period: "Abr 2022 - Jun 2022",
    desc: "Vue.js, Svelte, Strapi como CMS.",
  },
  {
    company: "BeWise",
    role: "Pasante Full-Stack",
    period: "May 2021 - Dic 2021",
    desc: "Spring (backend), ReactJS (frontend).",
  },
]

export function Experiencias() {
  return (
    <div className="slide-content flex h-full flex-col justify-start px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-3xl font-bold text-white"
      >
        Experiencias
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 * i }}
            className="border-l-2 pl-5"
            style={{ borderColor: "var(--color-neon)" }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <span className="shrink-0 text-sm text-muted">{exp.period}</span>
            </div>
            <p className="mt-0.5" style={{ color: "var(--color-neon)" }}>{exp.company}</p>
            <p className="mt-2 text-sm text-white/70">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
