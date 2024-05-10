import { Link } from "react-router-dom";

export const Navbar = ({
  about,
  music,
  contact,
  albums,
  aboutId,
  musicId,
}: {
  about?: string;
  music?: string;
  contact: string;
  albums: string;
  aboutId?: string;
  musicId?: string;
}) => {
  // const aboutId: string = "#about";
  // const musicId: string = "#music";
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
              <a href={aboutId}>{about}</a>
            </li>
            <li className="services">
              <a href={musicId}>{music}</a>
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
