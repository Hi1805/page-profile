import { useActiveNav } from "hooks";
import React, { useRef } from "react";
import "./navbar.scss";
import logo from "./img/logo.png";
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
  const [itemActiveState, setItemActiveState] = React.useState<nav>("home");
  const handleLink = (link: string) => {
    const href = `#${link}`;
    window.location.replace(href);
  };
  const refItem = useRef() as React.MutableRefObject<HTMLInputElement>;
  useActiveNav(refItem, (e: any) => {
    console.log(e);
  });
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
