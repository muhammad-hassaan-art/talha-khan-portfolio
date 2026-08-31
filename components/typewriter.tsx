"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  words: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  pause?: number
}

/**
 * Cycles through `words`, typing and deleting each one. Users who prefer
 * reduced motion just see the first word, statically.
 */
export function Typewriter({
  words,
  className,
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false)
  }, [])

  useEffect(() => {
    if (reduced || words.length === 0) return

    const word = words[index % words.length]

    if (!deleting && text === word) {
      const timer = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timer)
    }

    if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timer = setTimeout(
      () => {
        setText((current) =>
          deleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduced])

  if (reduced) {
    return <span className={className}>{words[0]}</span>
  }

  return (
    <span className={cn("type-caret", className)} aria-live="polite">
      {text}
    </span>
  )
}
