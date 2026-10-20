import { useEffect, useId, useRef, useState } from "react"

export default function GalleryGrid({ images }) {
  const [activeId, setActiveId] = useState(null)
  const dialogRef = useRef(null)
  const titleId = useId()
  const active = images.find((image) => image.id === activeId) ?? null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !active || dialog.open) return undefined
    dialog.showModal()
    return undefined
  }, [active])

  return (
    <>
      <ul className="gallery-grid">
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              type="button"
              className={
                image.width > image.height ? "gallery-card gallery-card--wide" : "gallery-card"
              }
              onClick={() => setActiveId(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="gallery-card__caption" aria-hidden="true">
                {image.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={() => setActiveId(null)}
      >
        {active ? (
          <>
            <img src={active.src} alt="" width={active.width} height={active.height} />
            <div className="lightbox__bar">
              <p id={titleId}>{active.caption}</p>
              <button type="button" onClick={() => dialogRef.current?.close()}>
                Close
              </button>
            </div>
          </>
        ) : null}
      </dialog>
    </>
  )
}
