import React from "react";
import { useHistory } from "react-router";
import "./navbar.scss";
type nav = "home" | "about" | "certificates" | "contact" | "featured";
const listNav: Array<{
  name: nav;
  display: string;
  link: string;
}> = [
  {
    name: "home",
    display: "Home",
    link: "",
  },
  {
    name: "about",
    display: "About Us",
    link: "aboutus",
  },

  {
    name: "certificates",
    display: "Certificates",
    link: "certificates",
  },
  {
    name: "featured",
    display: "Featured Works",
    link: "featured",
  },
  {
    name: "contact",
    display: "Contact",
    link: "contact",
  },
];
export const Navbar = () => {
  const history = useHistory();
  const [itemActiveState, setItemActiveState] = React.useState<nav>("home");
  const handleLink = (link: string) => {
    const href = `#${link}`;
    window.location.replace(href);
  };
  return (
    <div className="header">
      <nav className="navbar d-flex navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          PROFILE
        </a>
        <div className="nav">
          <ul className="navbar">
            {listNav.map((nav, index) => (
              <li
                key={index}
                className={`nav-item ${
                  nav.name === itemActiveState ? "active" : ""
                }`}
                onClick={() => {
                  setItemActiveState(nav.name);
                }}
              >
                <a
                  className="nav-link"
                  onClick={() => {
                    handleLink(nav.link);
                  }}
                >
                  {nav.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
