import { NavLink } from "react-router-dom"
import { businessInfo, formatStreetAddress } from "../../data/businessInfo.js"
import { navLinks } from "../../data/navigation.js"
import { getDirectionsUrl } from "../../services/businessLinks.js"
import Logo from "../common/Logo.jsx"

const copyrightYear = new Date().getFullYear()

export default function Footer() {

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="wordmark wordmark--footer">
            <Logo />
            <span>{businessInfo.name}</span>
          </p>
          <p className="site-footer__tagline">{businessInfo.tagline}</p>
        </div>

        <div>
          <h2>Visit</h2>
          <address>
            {formatStreetAddress()}
            <br />
            {businessInfo.address.landmark}
          </address>
          <p>
            <a href={businessInfo.phone.href}>{businessInfo.phone.display}</a>
          </p>
          <p>
            <a href={getDirectionsUrl()}>Get Directions</a>
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul className="site-footer__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container site-footer__base">
        <p>
          © {copyrightYear} {businessInfo.name}
        </p>
      </div>
    </footer>
  )
}
