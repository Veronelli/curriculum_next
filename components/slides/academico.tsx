"use client"

import { motion } from "motion/react"

const education = [
  { inst: "ESBA — Instituto de Estudios Superiores de Buenos Aires", detail: "Analista de Sistemas · Project Manager en tesis", period: "2023 — Presente" },
  { inst: "EducaciónIT", detail: "Cursos en progreso", period: "2025 — 2026" },
  { inst: "Escuela Técnica N°24", detail: "Técnico en Computación", period: "2015" },
  { inst: "Plataforma 5", detail: "Becado" },
  { inst: "Aprendé Programando", detail: "Programa de formación" },
]

export function Academico() {
  return (
    <div className="slide-content flex h-full flex-col justify-start px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-3xl font-bold text-white"
      >
        Formación Académica
      </motion.h2>

      <div className="space-y-3">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "color-mix(in srgb, var(--color-neon) 70%, transparent)" }}>
          Educación
        </h3>
        {education.map((item, i) => (
          <motion.div
            key={item.inst}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.08 * i }}
            className="border border-dotted p-4"
            style={{ borderColor: "color-mix(in srgb, var(--color-neon) 40%, transparent)" }}
          >
            <p className="font-medium text-white">{item.inst}</p>
            <p className="mt-0.5 text-sm text-white/60">{item.detail}</p>
            {item.period && (
              <p className="mt-1 text-xs text-muted">{item.period}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
