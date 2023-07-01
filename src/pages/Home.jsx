import React from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const link = "#";
  return (
    <>
      <Navbar />
      <div id="store">
        <div id="layer"></div>
        <h1>Euphony Records</h1>
        <p>Find the music you like</p>

        <button className="button">Music</button>
      </div>
      <section id="about" className="container">
        <h1 className="caption text-center">About</h1>
        <p className="lead">
          Euphony records was founded because of my love for music wanting to
          provide music records of different genres to people I decided to open
          a record store. We host local acts on weekends to give them exposure,
          as well as sponsor many community events as a way to give back to the
          community. Our mission is just to expose to bring people together
          through music.
        </p>
      </section>
      <div className="squares" id="selection">
        <div className="square">
          <h1>Acoustic</h1>
        </div>
        <div className="square-1">
          <h1>All Genres</h1>
        </div>
        <div className="square-2">
          <h1>Rock</h1>
        </div>
        <div className="square-3">
          <h1>Careers</h1>
        </div>
      </div>
      {/*  text  */}
      <div className="music" id="music">
        <div id="layer"></div>
        <h1 className="caption text-center white z-index">Music</h1>
        <p className="lead white z-index text-center lead">
          We sell music records of all genres so I'm sure you will find
          something you like. I recommend to check our catalog our team is
          professional and will assist with any questions you may have.
        </p>
        <button className="button">Music</button>
      </div>
      {/* fancy laptop img */}
      <div className="music-img"></div>

      {/* last pic */}
      <div className="section last-pic"></div>
      {/* <!-- grid list--> */}
      <section>
        <div className="container-2">
          <div className="grid-cols">
            <ul>
              <li>Shop & Learn</li>
              <li>
                <a href={link}>Music</a>
              </li>
              <li>
                <a href={link}>Movies</a>
              </li>
              <li>
                <a href={link}>Shows</a>
              </li>
              <li>
                <a href={link}>Apps</a>
              </li>
              <li>
                <a href={link}>Gift Cards</a>
              </li>
            </ul>

            <ul>
              <li>Record Store</li>
              <li>
                <a href={link}>Find a Store</a>
              </li>
              <li>
                <a href={link}>New Albums</a>
              </li>
              <li>
                <a href={link}>Discounts</a>
              </li>
              <li>
                <a href={link}>Order Status</a>
              </li>
            </ul>

            <ul>
              <li>Education & Business</li>
              <li>
                <a href={link}>Education</a>
              </li>
              <li>
                <a href={link}>Shop For College</a>
              </li>
              <li>
                <a href={link}>Orange & Business</a>
              </li>
              <li>
                <a href={link}>Shop For Business</a>
              </li>
              <li>
                <a href={link}>Jobs</a>
              </li>
            </ul>

            <ul>
              <li>About Record</li>
              <li>
                <a href={link}>Newsroom</a>
              </li>
              <li>
                <a href={link}>Leadership</a>
              </li>
              <li>
                <a href={link}>Events</a>
              </li>
              <li>
                <a href={link}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
