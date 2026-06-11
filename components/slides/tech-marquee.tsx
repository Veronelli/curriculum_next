"use client"

const techs = [
  "Python", "Django", "FastAPI", "Node", "Java", "SQL", "N8N",
  "Mongo", "Docker", "Git", "Javascript", "Linux", "Kanban",
  "Scrum", "UML", "OpenAI", "React.js", "Next.js", "OpenCode",
]

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="marquee-track flex w-max gap-4">
        {/* duplicate for seamless loop */}
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-block shrink-0 border border-dotted px-4 py-1.5 text-xs font-medium uppercase tracking-widest"
            style={{
              borderColor: "color-mix(in srgb, var(--color-neon) 30%, transparent)",
              color: "color-mix(in srgb, var(--color-neon) 80%, transparent)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
