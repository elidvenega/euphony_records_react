import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <>
      <Navbar
        about={"About"}
        music={"Music"}
        contact={"Contact"}
        albums={"Albums"}
      />
      <h1 className="text-center mt-2">About</h1>
    </>
  );
};
