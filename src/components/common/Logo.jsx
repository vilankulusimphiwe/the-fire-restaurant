import logo from "../../assets/images/logo.png"

/** Official mark. The business name sits beside it, so the image itself is decorative. */
export default function Logo({ className = "logo" }) {
  return <img className={className} src={logo} alt="" width="654" height="668" />
}
