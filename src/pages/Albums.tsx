import { Navbar } from "../components/Navbar";

export const Albums = () => {
  return (
    <>
      <Navbar
        about={"About"}
        music={"Music"}
        contact={"Contact"}
        albums={"Albums"}
      />
      <h1 className="text-center mt-2">Albums Coming Soon</h1>
    </>
  );
};
