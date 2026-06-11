"use client"

import { useState, useEffect, useCallback } from "react"
import { sections, getSection, type SectionId } from "./slides/config"
import { Principal } from "./slides/principal"
import { Tecnologias } from "./slides/tecnologias"
import { Experiencias } from "./slides/experiencias"
import { Academico } from "./slides/academico"
import { Proyectos } from "./slides/proyectos"
import { Repositorios } from "./slides/repositorios"
import { PixelCurtain } from "./slides/pixel-curtain"

const slideComponents: Record<SectionId, () => React.ReactNode> = {
  principal: Principal,
  tecnologias: Tecnologias,
  experiencias: Experiencias,
  academico: Academico,
  proyectos: Proyectos,
  repositorios: Repositorios,
}

const INTERVAL = 120_000
const SIDEBAR_W = 224

export function Slideshow() {
  const [active, setActive] = useState<SectionId>("principal")
  const [menuOpen, setMenuOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(true)
  const [curtainPhase, setCurtainPhase] = useState<"cover" | "reveal" | null>(null)
  const [pendingSection, setPendingSection] = useState<SectionId | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const goTo = useCallback((id: SectionId) => {
    if (curtainPhase) return
    setPendingSection(id)
    setCurtainPhase("cover")
  }, [curtainPhase])

  const next = useCallback(() => {
    if (curtainPhase) return
    setActive((prev) => {
      const idx = sections.findIndex((s) => s.id === prev)
      return sections[(idx + 1) % sections.length].id
    })
  }, [curtainPhase])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  const handleCoverComplete = useCallback(() => {
    if (pendingSection) {
      setActive(pendingSection)
      setPendingSection(null)
      setCurtainPhase("reveal")
    }
  }, [pendingSection])

  const handleRevealComplete = useCallback(() => {
    setCurtainPhase(null)
  }, [])

  const handleSelect = (id: SectionId) => {
    goTo(id)
    setMenuOpen(false)
  }

  const SlideComponent = slideComponents[active]
  const activeColor = getSection(active).color
  const curtainColor = pendingSection ? getSection(pendingSection).color : activeColor

  return (
    <div className="relative h-screen w-screen overflow-x-hidden overflow-y-auto bg-bg"
      style={{ "--color-neon": activeColor } as React.CSSProperties}
    >
      {/* corner diagonal accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 h-24 w-24 md:h-32 md:w-32"
          style={{
            borderTop: "2px dotted color-mix(in srgb, var(--color-neon) 50%, transparent)",
            borderLeft: "2px dotted color-mix(in srgb, var(--color-neon) 50%, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-24 w-24 md:h-32 md:w-32"
          style={{
            borderBottom: "2px dotted color-mix(in srgb, var(--color-neon) 50%, transparent)",
            borderRight: "2px dotted color-mix(in srgb, var(--color-neon) 50%, transparent)",
          }}
        />
      </div>

      <div
        className="relative z-10 flex h-full transition-all duration-300 ease-in-out"
        style={{
          width: isMobile ? `calc(100vw + ${SIDEBAR_W}px)` : "100%",
          transform: isMobile && !menuOpen ? `translateX(-${SIDEBAR_W}px)` : "translateX(0)",
        }}
      >
        {/* sidebar */}
        <aside className="shrink-0 border-dotted border-black/20 text-black md:border-r"
          style={{
            width: `${SIDEBAR_W}px`,
            backgroundColor: "var(--color-neon)",
            transition: "background-color 0.5s ease",
          }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-black/20 px-4 py-4 md:hidden">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                Menú
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-sm text-black/60 hover:text-black"
              >
                ✕
              </button>
            </div>

            <div className="hidden px-6 pb-8 pt-6 md:block md:pt-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                Menú
              </h2>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSelect(section.id)}
                  className={`relative px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    active === section.id
                      ? "text-black"
                      : "text-black/50 hover:text-black/80"
                  }`}
                >
                  {active === section.id && (
                    <span className="absolute left-0 top-0 h-full w-0.5 bg-black" />
                  )}
                  <span
                    className={`${
                      active === section.id ? "opacity-100" : "opacity-0"
                    } mr-3 inline-block text-black transition-opacity duration-300`}
                  >
                    &gt;
                  </span>
                  {section.label}
                </button>
              ))}
            </nav>

            <div className="border-t border-black/20 px-6 py-4">
              <div className="flex gap-1">
                {sections.map((s) => (
                  <span
                    key={s.id}
                    className={`block h-1 flex-1 rounded-full transition-colors duration-500 ${
                      s.id === active ? "bg-black" : "bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* main slide area */}
        <main className="relative flex flex-1 items-center justify-center overflow-x-hidden">
          <div className="h-full w-full" key={active}>
            <SlideComponent />
          </div>
          <PixelCurtain
            phase={curtainPhase}
            color={curtainColor}
            onCoverComplete={handleCoverComplete}
            onRevealComplete={handleRevealComplete}
          />
        </main>
      </div>

      {/* hamburger button (mobile only) */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            borderColor: "#00ff41",
            color: "#00ff41",
          }}
          className={`fixed left-4 top-4 z-30 flex h-10 w-10 items-center justify-center border border-dotted bg-bg transition-opacity ${
            menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          ☰
        </button>
      )}
    </div>
  )
}
