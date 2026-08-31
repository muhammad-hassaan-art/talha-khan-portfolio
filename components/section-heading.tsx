import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

interface SectionHeadingProps {
  eyebrow: string
  /** Rendered before the highlighted half of the title. */
  title: string
  /** Rendered in the accent gradient. */
  highlight?: string
  description?: string
  className?: string
  align?: "center" | "left"
}

/** The shared eyebrow + title + description block every section opens with. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-14", align === "center" && "text-center", className)}>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
