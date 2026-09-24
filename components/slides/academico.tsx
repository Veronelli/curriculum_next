"use client"

import { motion } from "motion/react"

const education = [
  {
    inst: "IESBA — Instituto de Estudios Superiores de Buenos Aires",
    detail: "Técnico Superior Analista de Sistemas · Project Manager en tesis",
    period: "Ago 2023 — Jul 2026",
    links: [
      { label: "Repositorio de tesis", href: "https://github.com/Veronelli/tesis_tienda_de_turismo" },
      { label: "Tesis", href: "https://drive.google.com/file/d/1y-J2TD2IE84BDxyJcfh5l-_9TjvAFUI7/view?usp=sharing" },
      { label: "Producto", href: "https://tesis.pumacore.com/" },
      { label: "Publicación", href: "https://www.linkedin.com/feed/update/urn:li:activity:7486496428823990272/" },
      { label: "Finalización", href: "https://drive.google.com/file/d/1ZJRwEKsWVVpHG7W5-BMG9Ji7OzhwNjRl/view?usp=sharing" },
      { label: "Notas analíticas", href: "https://drive.google.com/file/d/1Fru5bukJeihUezmzwB9p9qzeuFkF0jF_/view?usp=sharing" },
    ],
  },
  { inst: "CUI", detail: "DCC: Diploma Ciclo de Consolidación · Inglés B1 en curso", period: "Ago 2026 — Dic 2027" },
  { inst: "Educación IT", detail: "Carrera Data Science · En curso", period: "Oct 2025 — Mar 2027" },
  { inst: "Escuela Técnica N° 24", detail: "Técnico Secundario en Computación", period: "Mar 2016 — Dic 2021" },
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
            {item.links && (
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-xs">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
                    style={{ color: "var(--color-neon)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
