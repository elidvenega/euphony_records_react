import React from "react";
import { Link } from "react-router-dom";

export const Albums = () => {
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
              <Link to="/">Home</Link>
            </li>
            <li className="services">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="services">
              <Link to="/Albums">Albums</Link>
            </li>
          </div>
        </ul>
      </nav>

      <h1 className="text-center mt-2">Albums Coming Soon</h1>
    </>
  );
};
