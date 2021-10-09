import { navbar } from "containers";
import React from "react";
import logo from "containers/Home/img/logo.png";
import "./NavbarMobile.scss";

export const NavbarMobile = () => {
  const [itemActiveState, setItemActiveState] = React.useState<navbar>("home");

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
    <div className="header-mobile">
      <nav className="navbar navbar-expand-lg">
        <div className="nav w-100">
          <ul className="navbar w-100 d-flex justify-content-around">
            <li>Certificates</li>
            <li>Trips</li>
            <li>
              <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" />
              </a>
            </li>
            <li>Featured Works</li>
            <li>More</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
