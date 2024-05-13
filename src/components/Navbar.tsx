import { Link } from "react-router-dom";

export const Navbar = ({
  title,
  home,
  about,
  music,
  contact,
  albums,
}: {
  title: string;
  home: string;
  about: string;
  music: string;
  contact: string;
  albums: string;
}) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">{title}</div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li className="services">
              <Link to="/">{home}</Link>
            </li>
            <li>
              <a href="/About">{about}</a>
            </li>
            <li className="services">
              <a href="/Music">{music}</a>
            </li>
            <li className="services">
              <Link to="/Contact">{contact}</Link>
            </li>
            <li className="services">
              <Link to="/Albums">{albums}</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
