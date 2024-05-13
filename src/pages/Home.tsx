import { Navbar } from "../components/Navbar";
import { GridList } from "../components/GridList";
import { MusicInfo } from "../components/MusicInfo";
import { HomeInfo } from "../components/HomeInfo";
import { Images } from "../components/Images";
import { Footer } from "../components/Footer";


export const Home = () => {
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
      <HomeInfo />

      <MusicInfo />
      {/* fancy laptop img */}
      <div className="music-img"></div>

      {/* last pic */}
      <div className="section last-pic"></div>
      <Images />
      <GridList />
      <Footer />
    </>
  );
};
