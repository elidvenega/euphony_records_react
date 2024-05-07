// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Content } from "./Data.tsx";

export const Footer = () => {
  // const twitter:string = "https://twitter.com";
  // const facebook:string = "https://www.facebook.com/";
  // const instagram:string = "https://www.instagram.com/";

  const footerLinks: Content = {
    cellBlocks: [
      {
        link: {
          href: "https://www.facebook.com/",
        },
      },
      {
        link: {
          href: "https://www.instagram.com/",
        },
      },
      {
        link: {
          href: "https://twitter.com/",
        },
      }
    ],
  };

  
const firstHref = footerLinks.cellBlocks[0]?.link?.href;
const secondHref = footerLinks.cellBlocks[1]?.link?.href;
const thirdHref = footerLinks.cellBlocks[2]?.link?.href;
const allLinks: any = [firstHref, secondHref,thirdHref]
  return (
    <>
      <footer>
        <div className="links">
          {/* <a href={facebook} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a> */}
          <ul>
          {
            allLinks.map((link: string ) => <a href={link}>{link}</a>)
          }
          </ul>
        </div>
      </footer>
    </>
  );
};
