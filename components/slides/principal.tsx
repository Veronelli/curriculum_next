"use client"

import { motion } from "motion/react"
import { TechMarquee } from "./tech-marquee"
import { BASE_PATH } from "@/lib/constants"

const data = {
  name: "Facundo Veronelli",
  title: "Full Stack Developer",
  location: "Buenos Aires, Argentina",
  email: "facu2000veronelli@icloud.com",
  summary: "Profesional con experiencia en IT y estudios técnicos en computación, especializado en desarrollo de software. Actualmente cursando la carrera de Análisis de Sistemas.",
}

export function Principal() {
  return (
    <div className="slide-content flex h-full flex-col justify-start px-12 pt-20 pb-20 md:justify-center md:pb-32">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold tracking-tight text-white"
      >
        {data.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-4 text-xl"
        style={{ color: "var(--color-neon)" }}
      >
        {data.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mt-1 text-muted"
      >
        {data.location}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-8 max-w-xl"
      >
        <p className="text-lg leading-relaxed text-white/80">
          {data.summary}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm"
      >
        <a
          href={"mailto:" + data.email}
          className="underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: "var(--color-neon)" }}
        >
          {data.email}
        </a>
        <a
          href="https://github.com/Veronelli"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: "var(--color-neon)" }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/facundoveronelli"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-4 transition-opacity hover:opacity-70"
          style={{ color: "var(--color-neon)" }}
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-8"
      >
        <a
          href={`${BASE_PATH}/curriculum.pdf`}
          download
          className="inline-block border border-dotted px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all hover:bg-white/10"
          style={{ borderColor: "var(--color-neon)", color: "var(--color-neon)" }}
        >
          Descargar CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="mt-8 max-w-xl"
      >
        <TechMarquee />
      </motion.div>
    </div>
  )
}
