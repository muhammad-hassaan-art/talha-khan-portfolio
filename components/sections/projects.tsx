"use client"

import { useMemo, useState } from "react"
import { ExternalLink, Folder } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects, projectCategories, type ProjectCategory } from "@/lib/content"

type Filter = "All" | ProjectCategory

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All")

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          description="Enterprise CMS rollouts, government portals, ecommerce migrations, and custom full stack applications."
        />

        {/* Category filters */}
        <Reveal className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  filter === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-primary",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid — keyed on the filter so cards re-run their reveal on change. */}
        <div key={filter} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 70} direction="scale">
              <article className="card-lift gradient-border group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Folder className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-bold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Visit site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
