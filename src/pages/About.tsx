import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AboutData } from "../components/AboutData";

export const About = () => (
  <>
    <Navbar
      title={"Euphony"}
      home={"Home"}
      about={"About"}
      music={"Music"}
      contact={"Contact"}
      albums={"Albums"}
    />
    <AboutData />

    <Footer />
  </>
);
