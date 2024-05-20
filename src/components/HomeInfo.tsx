
import { AboutData } from "./AboutData.tsx";
import { Content } from "./Data.tsx";

export const HomeInfo = () => {
  const homeContent: Content = {
    cellBlocks: [
      {
        title: `Euphony Records`,
        content: `Find the music you like`,
        button: `Music`,
      },
      {
        title: `About`,
        content: `  Euphony records was founded because of my love for music wanting to
        provide music records of different genres to people I decided to open
        a record store. We host local acts on weekends to give them exposure,
        as well as sponsor many community events as a way to give back to the
        community. Our mission is just to expose to bring people together
        through music.`,
      },
    ],
  };
  return (
    <>
      <div id="store">
        <div id="layer"></div>
        <h1>{homeContent.cellBlocks[0].title}</h1>
        <p>{homeContent.cellBlocks[0].content}</p>

        <button className="button">{homeContent.cellBlocks[0].button}</button>
      </div>
      {/* <section id="about" className="container">
        <h2 className="caption text-center">
          {homeContent.cellBlocks[1].title}
        </h2>
        <p className="lead">{homeContent.cellBlocks[1].content}</p>
      </section> */}
      <AboutData />
      <div className="squares" id="selection">
        <div className="square">
          <h2>Acoustic</h2>
        </div>
        <div className="square-1">
          <h2>All Genres</h2>
        </div>
        <div className="square-2">
          <h2>Rock</h2>
        </div>
        <div className="square-3">
          <h2>Careers</h2>
        </div>
      </div>
    </>
  );
};
