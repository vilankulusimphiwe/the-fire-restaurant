import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { businessInfo } from "../../data/businessInfo.js"
import { navLinks } from "../../data/navigation.js"
import Logo from "../common/Logo.jsx"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    function onKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.classList.add("nav-open")

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.classList.remove("nav-open")
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="wordmark" end onClick={() => setMenuOpen(false)}>
          <Logo />
          <span>{businessInfo.name}</span>
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav id="site-menu" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
