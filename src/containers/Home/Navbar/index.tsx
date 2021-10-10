import { useIsMobile } from "hooks";
import React from "react";
import "./navbar.scss";
import logo from "containers/Home/img/logo.png";
import { NavbarMobile } from "containers";
import { Link } from "react-scroll";
export type navbar =
  | "home"
  | "about"
  | "certificates"
  | "contact"
  | "featured"
  | "";

export const listNav: Array<{
  name: navbar;
  display: string;
  link: string;
}> = [
  {
    name: "home",
    display: "Home",
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
  const isMobile = useIsMobile();

  const NavDesktop = (
    <div className="header">
      <nav className="navbar d-flex navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="nav">
          <ul className="navbar">
            {listNav.map((nav, index) => (
              <li key={index}>
                <Link
                  className="nav-link"
                  smooth={true}
                  offset={-100}
                  spy={true}
                  to={nav.link}
                  duration={100}
                  activeClass="active"
                >
                  {nav.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
  return isMobile ? <NavbarMobile /> : NavDesktop;
};
