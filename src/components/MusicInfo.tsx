import { Content } from "./Data.tsx";

export const MusicInfo = () => {
  const musicContent: Content = {
    cellBlocks: [
      {
        heading: `Music`,
        content: ` We sell music records of all genres so I'm sure you will find something
        you like. I recommend to check our catalog our team is professional and
        will assist with any questions you may have.`,
      },
    ],
  };

  return (
    <div className="music" id="music">
      <div id="layer"></div>
      <h1 className="caption text-center white z-index">
        {musicContent.cellBlocks[0].heading}
      </h1>
      <p className="lead white z-index text-center lead">
      {musicContent.cellBlocks[0].content}
      </p>
      <button className="button">{musicContent.cellBlocks[0].heading}</button>
    </div>
  );
};
