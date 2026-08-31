"use client"

import { useEffect, useState } from "react"
import { Menu, X, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { sections, profile } from "@/lib/content"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [progress, setProgress] = useState(0)

  // Solidify the bar once the page scrolls away from the hero, and track the
  // read-progress bar in the same handler to avoid a second scroll listener.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll-spy: highlight whichever section is currently in view.
  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null)

    // Sections vary hugely in height, so "largest visible area" would let the
    // tallest one win everywhere. Pick whichever section's top edge is the
    // last one above the reading line instead.
    const READING_LINE = 0.3

    const update = () => {
      const line = window.innerHeight * READING_LINE
      let current = "home"
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) current = node.id
      }
      // A short final section may never reach the reading line, so once the
      // viewport actually shows it, treat it as current.
      const last = nodes[nodes.length - 1]
      if (last && last.getBoundingClientRect().top < window.innerHeight * 0.6) {
        current = last.id
      }
      setActiveSection(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Talha<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                data-active={activeSection === section.id}
                className={cn(
                  "link-underline text-sm font-medium transition-colors",
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Read-progress bar */}
      <div
        className="h-0.5 origin-left bg-primary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Mobile sheet */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl transition-[max-height] duration-400 lg:hidden",
          isOpen ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <ul className="space-y-1 px-5 py-5">
          {sections.map((section, i) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Hire Me — {profile.rate}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
