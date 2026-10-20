import { useEffect } from "react"

/**
 * Sets the browser tab title and the meta description for the current page.
 * A small hook is enough here. A library would only wrap these two DOM updates.
 */
export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title

    if (!description) return

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", description)
  }, [title, description])
}
