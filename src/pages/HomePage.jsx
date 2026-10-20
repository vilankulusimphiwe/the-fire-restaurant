import Button from "../components/common/Button.jsx"
import Logo from "../components/common/Logo.jsx"
import { businessInfo } from "../data/businessInfo.js"
import { galleryImages } from "../data/gallery.js"
import { usePageMeta } from "../hooks/usePageMeta.js"
import { getDirectionsUrl } from "../services/businessLinks.js"

const kitchenPreview = galleryImages.filter((image) =>
  ["braaied-chops-sausage", "chicken-wings", "amagwinya"].includes(image.id),
)

export default function HomePage() {
  usePageMeta({
    title: "The Fire Restaurant | Shisanyama in Johannesburg",
    description: businessInfo.summary,
  })

  return (
    <>
    <section className="hero">
      <div className="container hero__inner">
        <Logo className="logo logo--hero" />
        <p className="eyebrow">Johannesburg</p>
        <h1>{businessInfo.name}</h1>
        <p className="hero__tagline">{businessInfo.tagline}</p>
        <p className="hero__summary">{businessInfo.summary}</p>
        <div className="hero__actions">
          <Button href={getDirectionsUrl()}>Get Directions</Button>
          <Button to="/offerings" variant="secondary">
            Explore Our Offerings
          </Button>
        </div>
      </div>
    </section>

    <section className="photo-band" aria-labelledby="kitchen-heading">
      <div className="container">
        <p className="eyebrow eyebrow--dark">The kitchen</p>
        <h2 id="kitchen-heading">Food from the fire</h2>
        <ul className="photo-preview">
          {kitchenPreview.map((image) => (
            <li key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
              />
              <p>{image.caption}</p>
            </li>
          ))}
        </ul>
        <Button to="/gallery">View the gallery</Button>
      </div>
    </section>
    </>
  )
}
