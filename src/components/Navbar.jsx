import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const about = "#about";
  const music = "#music";
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">Euphony</div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <a href={about}>About</a>
            </li>
            <li className="services">
              <a href={music}>Music</a>
            </li>
            <li className="services">
              <Link to="/ContactForm">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
