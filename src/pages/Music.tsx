import { Navbar } from "../components/Navbar";

export const Music = () => {
  return (
    <>
      <Navbar
        about={"About"}
        music={"Music"}
        contact={"Contact"}
        albums={"Albums"}
      />
      <h1 className="text-center mt-2">Music</h1>
    </>
  );
};
