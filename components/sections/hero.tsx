import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react"
import { Aurora } from "@/components/aurora"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"
import { Typewriter } from "@/components/typewriter"
import { profile, stats, credentials, marqueeItems } from "@/lib/content"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <Aurora />
      <div className="dot-grid absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new projects
              </span>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 text-lg text-muted-foreground">
                Hi, I&apos;m <span className="font-semibold text-foreground">{profile.name}</span>
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                A <span className="gradient-text">Fullstack</span> Web
                <br />
                Developer
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 font-display text-xl font-medium text-muted-foreground sm:text-2xl">
                Specializing in{" "}
                <Typewriter
                  className="text-primary"
                  words={["Drupal", "Shopify", "WordPress", "Laravel", "AI Integration"]}
                />
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="glow-pulse group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  <Download className="h-4 w-4" />
                  See My Work
                </a>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  {profile.rate}
                </span>
                <span className="inline-flex items-center gap-2">
                  Responds in {profile.responseTime}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Credential card stack */}
          <Reveal direction="scale" delay={220}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="animate-float rounded-[2rem] border border-border bg-card/70 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary font-display text-2xl font-bold text-primary-foreground">
                    MT
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold">{profile.name}</p>
                    <p className="text-sm text-muted-foreground">{profile.tagline}</p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {credentials.map((credential) => (
                    <div
                      key={credential}
                      className="rounded-xl border border-border bg-background/60 px-4 py-3 text-center text-xs font-semibold text-primary"
                    >
                      {credential}
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-primary/25 bg-primary/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Total Earnings
                  </p>
                  <p className="mt-1.5 font-display text-3xl font-bold">$100K+</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    across {profile.availability.toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stat band */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="card-lift gradient-border h-full rounded-2xl border border-border bg-card/60 p-7 text-center backdrop-blur-sm">
                <p className="font-display text-4xl font-bold text-primary">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Infinite tech marquee */}
      <div className="relative z-10 mt-20 border-y border-border bg-card/30 py-6">
        <div className="marquee">
          {[0, 1].map((track) => (
            <div key={track} className="marquee-track" aria-hidden={track === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={item}
                  className="font-display text-2xl font-semibold text-muted-foreground/60 transition-colors hover:text-primary sm:text-3xl"
                >
                  {item}
                  <span className="ml-8 text-primary/40">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
