import { Content } from "./Data.tsx";

export const AboutData = () => {
  const aboutContent: Content = {
    cellBlocks: [
      {
        heading: `About`,
        content: `  Euphony records was founded because of my love for music wanting to
        provide music records of different genres to people I decided to open a
        record store. We host local acts on weekends to give them exposure, as
        well as sponsor many community events as a way to give back to the
        community. Our mission is just to expose to bring people together
        through music.`,
      },
    ],
  };
  return (
    <section className=" container">
      <h1 className="caption text-center">
        {aboutContent.cellBlocks[0].heading}
      </h1>
      <p className="lead">{aboutContent.cellBlocks[0].content}</p>
    </section>
  );
};
