import PageIntro from "../components/common/PageIntro.jsx"
import { usePageMeta } from "../hooks/usePageMeta.js"

export default function AboutPage() {
  usePageMeta({
    title: "About | The Fire Restaurant",
    description:
      "The Fire Restaurant is an African restaurant and shisanyama in Johannesburg for food, braai, drinks, and snooker.",
  })

  return (
    <PageIntro eyebrow="About" title="A place to eat, braai, and gather">
      <p>
        The Fire Restaurant is an African restaurant and shisanyama on Commissioner
        Street in Johannesburg. Guests come for African food, meat from the butchery
        to cook on the braai, drinks, and a game of snooker or pool.
      </p>
    </PageIntro>
  )
}
