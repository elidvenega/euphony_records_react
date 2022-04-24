import React from 'react';

export const Body = () => {
  return (
   <>
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
    {/* <!-- text --> */}
    <div id="music">
      <div id="layer"></div>
      <h1 className="caption text-centern white z-index">Music</h1>
      <p className="lead white z-index text-center lead">
        We sell music records of all genres so I'm sure you will find something
        you like. I recommend to check our catalog our team is professional and
        will assist with any questions you may have.
      </p>
      <button className="button-21">Music</button>
    </div>
    {/* <!-- fancy laptop img --> */}
    <div id="music-img"></div>

    {/* <!-- entertainment --> */}
    <div id="music" className="section"></div>
   </>
  )
}










