import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { albums } from "../components/album-data.js";
import { getImageUrl } from "../components/utils.js";

export const Albums = () => (
  <>
    <Navbar
      title={"Euphony"}
      home={"Home"}
      about={"About"}
      music={"Music"}
      contact={"Contact"}
      albums={"Albums"}
    />
    <div className="height-container">
      <h1 className="text-center mt-2">Albums Coming Soon</h1>
    </div>
    <Footer />

    <ul>
      {albums.map((albums) => (
        <li key={albums.id}>
          <img src={getImageUrl(albums)} alt={albums.name} />
          <p>
            <b>{albums.name}</b>
            {" " + albums.profession + " "}
            known for {albums.accomplishment}
          </p>
        </li>
      ))}
    </ul>
  </>
);
