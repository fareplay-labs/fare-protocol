import { useState } from "react";
import { Link } from "react-router-dom";
import { LinksData } from "../../data/linksData";

export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="dropdown__button" onClick={() => setOpen((prev) => !prev)}>&#9776;</button>
      {open && (
        <div className="dropdown-menu">
          {LinksData.map((link) => (
            <Link key={link.id} to={link.to} className="dropdown-link">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
