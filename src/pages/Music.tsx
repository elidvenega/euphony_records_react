import { Navbar } from "../components/Navbar";
import { MusicInfo } from "../components/MusicInfo";
import { Footer } from "../components/Footer";

export const Music = () => {
  return (
    <>
      <Navbar
        title={"Euphony"}
        home={"Home"}
        about={"About"}
        music={"Music"}
        contact={"Contact"}
        albums={"Albums"}
      />
      <MusicInfo />
      <Footer />
    </>
  );
};
