import React from "react";
import "./navbar.scss";
type nav = "home" | "about" | "product" | "contact";
const listNav: Array<{
  name: nav;
  display: string;
  link: string;
}> = [
  {
    name: "home",
    display: "Home",
    link: "/",
  },
  {
    name: "about",
    display: "About Us",
    link: "/about",
  },

  {
    name: "product",
    display: "Products",
    link: "/",
  },
  {
    name: "contact",
    display: "Contact",
    link: "/",
  },
];
export const Navbar = () => {
  const [itemActiveState, setItemActiveState] = React.useState<nav>("home");

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          PROFILE
        </a>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
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
                <a className="nav-link" href="#">
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
