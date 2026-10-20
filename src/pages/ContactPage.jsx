import Button from "../components/common/Button.jsx"
import PageIntro from "../components/common/PageIntro.jsx"
import { businessInfo, formatStreetAddress } from "../data/businessInfo.js"
import { usePageMeta } from "../hooks/usePageMeta.js"
import { getDirectionsUrl } from "../services/businessLinks.js"

export default function ContactPage() {
  usePageMeta({
    title: "Visit Us | The Fire Restaurant",
    description: `Find The Fire Restaurant at ${formatStreetAddress()}, ${businessInfo.address.landmark}.`,
  })

  return (
    <>
      <PageIntro eyebrow="Visit us" title="Come and experience the venue">
        <p>
          The Fire Restaurant is at {formatStreetAddress()}. {businessInfo.address.landmark}.
        </p>
      </PageIntro>

      <section className="page-section">
        <div className="container visit-panel">
          <h2>Address</h2>
          <address>
            {formatStreetAddress()}
            <br />
            {businessInfo.address.landmark}
          </address>
          <h2>Phone</h2>
          <p>
            <a href={businessInfo.phone.href}>{businessInfo.phone.display}</a>
          </p>
          <Button href={getDirectionsUrl()}>Get Directions</Button>
          <p className="note">
            Email, WhatsApp, and opening hours have not been confirmed yet, so they
            are not shown.
          </p>
        </div>
      </section>
    </>
  )
}
