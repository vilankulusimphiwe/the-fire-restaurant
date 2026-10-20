import PageIntro from "../components/common/PageIntro.jsx"
import { usePageMeta } from "../hooks/usePageMeta.js"

export default function OfferingsPage() {
  usePageMeta({
    title: "Offerings | The Fire Restaurant",
    description:
      "African food, a butchery and braai, drinks, and snooker or pool at The Fire Restaurant.",
  })

  return (
    <PageIntro eyebrow="Offerings" title="Food, fire, drinks, and a game">
      <p>
        Four experiences sit under one roof: African food, meat from the butchery for
        the braai, drinks, and snooker or pool.
      </p>
    </PageIntro>
  )
}
