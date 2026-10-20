import Button from "../components/common/Button.jsx"
import PageIntro from "../components/common/PageIntro.jsx"
import { usePageMeta } from "../hooks/usePageMeta.js"

export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found | The Fire Restaurant",
    description: "That page is not part of The Fire Restaurant website.",
  })

  return (
    <PageIntro eyebrow="404" title="This page is not on the menu">
      <p>The link may be out of date. Head back to the homepage to keep looking.</p>
      <Button to="/">Back to home</Button>
    </PageIntro>
  )
}
