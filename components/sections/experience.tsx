import { Briefcase } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experiences } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="worked"
          description="Eight years across freelance, agency, and product teams — in Pakistan, New Zealand, and Germany."
        />

        <div className="relative">
          {/* Timeline spine — hidden on mobile where cards stack full width. */}
          <div
            className="absolute left-[19px] top-2 hidden h-full w-px bg-gradient-to-b from-primary via-border to-transparent sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((experience, i) => (
              <Reveal key={`${experience.company}-${experience.period}`} delay={i * 80} direction="right">
                <div className="relative sm:pl-16">
                  <span
                    className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary sm:flex"
                    aria-hidden="true"
                  >
                    <Briefcase className="h-4 w-4" />
                  </span>

                  <article className="card-lift rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-bold">{experience.role}</h3>
                        <p className="mt-1 text-sm font-medium text-primary">
                          {experience.company}
                        </p>
                      </div>
                      <span className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {experience.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                      {experience.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
