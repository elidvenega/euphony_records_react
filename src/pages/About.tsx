import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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
    <section className="height-container container">
      <h1 className="caption text-center">About</h1>
      <p className="lead">
        Euphony records was founded because of my love for music wanting to
        provide music records of different genres to people I decided to open a
        record store. We host local acts on weekends to give them exposure, as
        well as sponsor many community events as a way to give back to the
        community. Our mission is just to expose to bring people together
        through music.
      </p>
    </section>
      <Footer />

  </>
);
