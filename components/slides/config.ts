export const sections = [
  { id: "principal", label: "Principal", color: "#00ff41" },
  { id: "tecnologias", label: "Tecnologías", color: "#bb44ff" },
  { id: "experiencias", label: "Experiencias", color: "#ff44cc" },
  { id: "academico", label: "Académico", color: "#00ccff" },
  { id: "proyectos", label: "Proyectos", color: "#ff8800" },
  { id: "repositorios", label: "Repositorios", color: "#aaff00" },
] as const

export type SectionId = (typeof sections)[number]["id"]

export function getSection(id: SectionId) {
  return sections.find((s) => s.id === id)!
}
