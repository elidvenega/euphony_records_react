import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Albums = () => {
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
      <h1 className="text-center mt-2">Albums Coming Soon</h1>
      <Footer />
    </>
  );
};
