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
        title: `Acoustic`,
      },
      {
        title: `All Genres`,
      },
      {
        title: `Rock`,
      },
      {
        title: `Careers`,
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

      <AboutData />
      <div className="squares" id="selection">
        <div className="square">
          <h2>{homeContent.cellBlocks[1].title}</h2>
        </div>
        <div className="square-1">
          <h2>{homeContent.cellBlocks[2].title}</h2>
        </div>
        <div className="square-2">
          <h2>{homeContent.cellBlocks[3].title}</h2>
        </div>
        <div className="square-3">
          <h2>{homeContent.cellBlocks[4].title}</h2>
        </div>
      </div>
    </>
  );
};
