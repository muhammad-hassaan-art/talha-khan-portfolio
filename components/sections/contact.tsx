"use client"

import { useState, type FormEvent } from "react"
import { Clock, Mail, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/content"

export function Contact() {
  const [sent, setSent] = useState(false)

  /**
   * No backend is wired up yet, so the form hands off to the visitor's mail
   * client rather than silently dropping the message.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(data.get("subject") || "Project enquiry"))
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Join forces"
          highlight="with me"
          description="Whether it's a high-performance CMS, an engaging online store, or a complex integration — let's talk about it."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <Reveal direction="left">
            <div className="flex h-full flex-col gap-4">
              {[
                { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: MapPin, label: "Location", value: `${profile.location} · ${profile.timezone}` },
                { icon: Clock, label: "Response time", value: profile.responseTime },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block truncate text-sm font-medium transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="gradient-border mt-auto rounded-2xl border border-primary/25 bg-primary/5 p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Available now
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Taking on new projects at {profile.rate} — {profile.availability.toLowerCase()},
                  with contract-to-hire welcome.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>

              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="What can I help with?" />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project…"
                  className="w-full resize-y rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Opening your mail app
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  )
}
