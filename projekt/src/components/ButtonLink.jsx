import { Link } from "react-router-dom";
import "./ButtonLink.css";

export function ButtonLink({ to, children, ...props }) {
  return (
    <Link
      className={`button-link ${props.className ? props.className : ""}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
