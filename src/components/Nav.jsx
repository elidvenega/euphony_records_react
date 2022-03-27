import React from 'react'

export const Nav = () => {
  return (
   <>
    <nav className="navbar">
      {/* <!-- LOGO --> */}
      <div class="logo">Euphony</div>
      {/* <!-- NAVIGATION MENU --> */}
      <ul class="nav-links">
        {/* <!-- USING CHECKBOX HACK --> */}
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>
        {/* <!-- NAVIGATION MENUS --> */}
        <div class="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li class="services">
            <a href="#music">Music</a>
          </li>
        </div>
      </ul>
    </nav>
   </>
  )
}
