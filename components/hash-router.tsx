"use client"

import { useEffect } from "react"

/**
 * Section paths that map to sections on the home page.
 * Each path is a top-level URL that smooth-scrolls to its matching DOM id.
 */
const SECTION_PATHS: Record<string, string> = {
  "/services": "services",
  "/coverage": "coverage",
  "/why-alto": "why-alto",
  "/contact": "contact",
  "/": "hero",
}

function scrollToId(id: string, smooth: boolean) {
  const target = document.getElementById(id)
  if (!target) return false
  target.scrollIntoView({
    behavior: smooth ? "smooth" : "auto",
    block: "start",
  })
  return true
}

/**
 * Single-page scroll navigator with clean URLs.
 *
 * - Intercepts in-page anchor and section-path link clicks (e.g. "/services",
 *   "#contact", "/#contact"), preventDefault, smooth-scrolls to the section,
 *   and updates the URL with history.replaceState so we never trigger a Next
 *   route change. The page tree stays mounted, scroll position is smooth.
 * - On initial mount (direct visit / refresh on /services), scrolls to the
 *   matching section instantly. Next.js rewrites (next.config.mjs) point each
 *   section path back to the home page, so the content renders.
 */
export function HashRouter() {
  useEffect(() => {
    // Initial-load scroll for direct visits to /services, /coverage, etc.
    const path = window.location.pathname
    const initialId = SECTION_PATHS[path]
    if (initialId && initialId !== "hero") {
      // Wait one frame so the DOM is laid out and IDs exist.
      requestAnimationFrame(() => scrollToId(initialId, false))
    }

    const handler = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return

      const anchor = (e.target as HTMLElement | null)?.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      let id: string | null = null
      let cleanPath: string | null = null

      if (href.startsWith("#")) {
        id = href.slice(1)
        cleanPath = `/${id === "hero" ? "" : id}`
      } else if (href.startsWith("/#")) {
        id = href.slice(2)
        cleanPath = `/${id === "hero" ? "" : id}`
      } else if (href in SECTION_PATHS) {
        id = SECTION_PATHS[href]
        cleanPath = href
      }

      if (!id) return
      if (!document.getElementById(id)) return

      // Capture-phase: stop the event before next/link's own handler runs.
      e.preventDefault()
      e.stopPropagation()
      scrollToId(id, true)
      // Update the URL without triggering Next routing.
      window.history.replaceState(null, "", cleanPath ?? `/${id}`)
    }

    document.addEventListener("click", handler, true)
    return () => document.removeEventListener("click", handler, true)
  }, [])

  return null
}
