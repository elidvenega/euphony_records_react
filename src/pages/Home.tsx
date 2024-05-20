import { Navbar } from "../components/Navbar";
import { GridList } from "../components/GridList";
import { MusicInfo } from "../components/MusicInfo";
import { HomeInfo } from "../components/HomeInfo";
import { Images } from "../components/Images";
import { Footer } from "../components/Footer";

export const Home = () => (
  <>
    <Navbar
      title={"Euphony"}
      home={"Home"}
      about={"About"}
      music={"Music"}
      contact={"Contact"}
      albums={"Albums"}
    />
    <HomeInfo />

    <MusicInfo />
    <Images />
    <GridList />
    <Footer />
  </>
);
