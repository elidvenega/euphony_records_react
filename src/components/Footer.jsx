import React from 'react';

export const Footer = () => {
  return (
   <>
    {/* <!-- grid list--> */}
    <section>
      <div className="container-2">
        <div className="grid-cols">
          <ul>
            <li>Shop & Learn</li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Shows</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <ul>
            <li>Record Store</li>
            <li>
              <a href="#">Find a Store</a>
            </li>
            <li>
              <a href="#">Today at Orange</a>
            </li>
            <li>
              <a href="#">Orange Camp</a>
            </li>
            <li>
              <a href="#">Financing</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
          </ul>

          <ul>
            <li>Education & Business</li>
            <li>
              <a href="#">Education</a>
            </li>
            <li>
              <a href="#">Shop For College</a>
            </li>
            <li>
              <a href="#">Orange & Business</a>
            </li>
            <li>
              <a href="#">Shop For Business</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>

          <ul>
            <li>About Record</li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Leadership</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <footer>
      <div className="links">
        <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
        <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
      </div>
    </footer>
   </>
  )
}