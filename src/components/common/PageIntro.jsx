export default function PageIntro({ eyebrow, title, children }) {
  return (
    <header className="page-intro">
      <div className="container page-intro__inner">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  )
}
