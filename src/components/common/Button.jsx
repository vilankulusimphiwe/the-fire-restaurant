import { Link } from "react-router-dom"

/**
 * One button style for three kinds of action:
 * a route inside the site (`to`), a normal link (`href`), or a real button.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}) {
  const classes = ["button", `button--${variant}`, className].filter(Boolean).join(" ")

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
