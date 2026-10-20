import GalleryGrid from "../components/common/GalleryGrid.jsx"
import PageIntro from "../components/common/PageIntro.jsx"
import { galleryImages } from "../data/gallery.js"
import { usePageMeta } from "../hooks/usePageMeta.js"

export default function GalleryPage() {
  usePageMeta({
    title: "Gallery | The Fire Restaurant",
    description:
      "Photographs of braaied meat, chicken wings, amagwinya, and the menu board at The Fire Restaurant in Johannesburg.",
  })

  return (
    <>
      <PageIntro eyebrow="Gallery" title="From the fire">
        <p>
          Food from the kitchen at The Fire Restaurant. These pictures show what comes
          off the braai. Photos of the room, drinks, and the snooker tables are not
          available yet.
        </p>
      </PageIntro>
      <section className="gallery-section" aria-label="Photographs">
        <div className="container">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  )
}
