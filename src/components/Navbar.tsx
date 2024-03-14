import { Link } from "react-router-dom";

export const Navbar = () => {
  const about = "#about";
  const music = "#music";
  return (
    <>
      <nav className="navbar">
        <div className="logo">Euphony</div>
         <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li className="services">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href={about}>About</a>
            </li>
            <li className="services">
              <a href={music}>Music</a>
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
    </>
  );
};
