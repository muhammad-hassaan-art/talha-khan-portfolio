import { Quote, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { testimonials } from "@/lib/content"

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients"
          highlight="say"
          description="Every review below is a verified 5-star rating from a completed Upwork contract."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.project + i} delay={i * 80} direction="scale">
              <figure className="card-lift gradient-border flex h-full flex-col rounded-2xl border border-border bg-card/60 p-7 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />

                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>

                <figcaption className="mt-4 border-t border-border pt-5">
                  <p className="text-sm font-medium text-foreground">{testimonial.project}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {testimonial.endorsements.map((endorsement) => (
                      <li
                        key={endorsement}
                        className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {endorsement}
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
