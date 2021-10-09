import { navbar } from "containers";
import React from "react";
import logo from "containers/Home/img/logo.png";
import "./NavbarMobile.scss";
import {
  MdOutlineFeaturedPlayList,
  BiCertification,
  MdOutlinePermContactCalendar,
  CgMoreO,
} from "react-icons/all";
import { Link, animateScroll as scroll } from "react-scroll";

export const NavbarMobile = () => {
  return (
    <div className="header-mobile">
      <nav className="navbar navbar-expand-lg">
        <div className="nav w-100">
          <ul className="navbar w-100 d-flex">
            <li className="nav-item certificates">
              <Link
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                offset={0}
              >
                <BiCertification className="nav-item__icons" />
                <span> Certificate</span>
              </Link>
            </li>
            <li className="nav-item featured">
              <Link
                to="featured"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
              >
                <MdOutlineFeaturedPlayList className="nav-item__icons col-12" />
                <span>Features</span>
              </Link>
            </li>

            <li className="nav-item nav-item__middle">
              <Link
                to="aboutus"
                spy={true}
                offset={0}
                smooth={true}
                className="d-flex justify-content-center flex-wrap"
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ marginBottom: "0.25rem" }}
                />
                <span className="w-100">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
              >
                <MdOutlinePermContactCalendar className="nav-item__icons" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav-item more">
              <CgMoreO className="nav-item__icons" />
              <span>More</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
