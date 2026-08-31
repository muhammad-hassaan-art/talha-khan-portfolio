import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Icon } from "@/components/icon"
import { skillGroups } from "@/lib/content"

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Skills"
          title="The stack I"
          highlight="work in"
          description="Eight years of production work across content management, ecommerce, and modern full stack tooling."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80} direction="scale">
              <div className="card-lift gradient-border h-full rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm">
                <div className="flex items-center gap-3.5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{group.title}</h3>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
