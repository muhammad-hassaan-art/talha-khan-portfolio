import { CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Icon } from "@/components/icon"
import { profile, highlights, education, languages } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building the web,"
          highlight="end to end"
          description={profile.summary}
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* Profile panel */}
          <Reveal direction="left">
            <div className="gradient-border h-full rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold">{profile.role}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{profile.tagline}</p>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {profile.clients}
              </p>

              <dl className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
                {[
                  ["Location", profile.location],
                  ["Availability", profile.availability],
                  ["Response time", profile.responseTime],
                  ["Rate", profile.rate],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Education
                </h4>
                {education.map((entry) => (
                  <div key={entry.degree} className="mt-3">
                    <p className="text-sm font-medium">{entry.degree}</p>
                    <p className="text-sm text-muted-foreground">
                      {entry.institution} · {entry.period}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Languages
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <li
                      key={language.name}
                      className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs text-muted-foreground"
                    >
                      {language.name} · {language.level}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Highlights */}
          <div>
            <Reveal direction="right">
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;ve spent the last eight years shipping production systems — from 70+
                multilingual Drupal sites for a European pharmaceutical group, to a government
                rulemaking portal, to Shopify storefronts and apps used by retailers across New
                Zealand and Australia. Whatever the platform, the goal is the same: secure,
                scalable, and genuinely fast.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight, i) => (
                <Reveal key={highlight.title} direction="right" delay={i * 90}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon name={highlight.icon} className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 font-display text-base font-bold">{highlight.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal direction="right" delay={200}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Drupal 7 → 11 migrations",
                  "Shopify store migrations",
                  "REST API integrations",
                  "Claude & OpenAI integrations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
