import { LinksData } from "../../data/linksData";
import { Dropdown } from "./dropdown";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <ul>
          {LinksData.map((link) => (
            <li key={link.id}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Dropdown />
    </>
  );
};
