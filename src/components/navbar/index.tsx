import { LinksData } from "../../data/linksData";
import { Dropdown } from "./dropdown";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar-wrapper" aria-label="Primary navigation">
        <ul>
          {LinksData.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to ? "navbar-link-active" : ""
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Dropdown />
    </>
  );
};
