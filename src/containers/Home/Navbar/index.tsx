import { useActiveNav } from "hooks";

import React from "react";
import "./navbar.scss";
import logo from "./img/logo.png";
type navbar = "home" | "about" | "certificates" | "contact" | "featured" | "";

const listNav: Array<{
  name: navbar;
  display: string;
  link: string;
}> = [
  {
    name: "home",
    display: "Home",
    link: "#top",
  },
  {
    name: "certificates",
    display: "Certificates",
    link: "#certificates",
  },
  {
    name: "featured",
    display: "Featured Works",
    link: "#featured",
  },

  {
    name: "contact",
    display: "Contact",
    link: "#contact",
  },
];

export const Navbar = () => {
  const [itemActiveState, setItemActiveState] = React.useState<navbar>("home");

  const handleLink = (link: string) => {
    const href = `${link}`;
    window.location.replace(href);
  };

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-item");
    window.onscroll = () => {
      var current: navbar = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") as navbar;
        }
      });

      navLi.forEach((li) => {
        if (li.classList.contains(current)) {
          setItemActiveState(current);
        }
      });
    };
  }, []);

  return (
    <div className="header">
      <h5>WEBSITE IS BUILDING</h5>
      <nav className="navbar d-flex navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo"></img>
        </a>
        <div className="nav">
          <ul className="navbar">
            {listNav.map((nav, index) => (
              <li
                key={index}
                className={`nav-item ${nav.name} ${
                  nav.name === itemActiveState ? "active" : ""
                }`}
                onClick={() => {
                  setItemActiveState(nav.name);
                }}
              >
                <a
                  className="nav-link"
                  href={nav.link}
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
