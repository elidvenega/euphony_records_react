import { Content } from "./Data.tsx";

export const Footer = () => {
  const footerLinks: Content = {
    cellBlocks: [
      {
        link: {
          href: "https://www.facebook.com/",
          className: "fab fa-facebook fa-2x",
        },
      },
      {
        link: {
          href: "https://www.instagram.com/",
          className: "fab fa-instagram fa-2x",
        },
      },
      {
        link: {
          href: "https://twitter.com/",
          className: "fab fa-twitter fa-2x",
        },
      },
    ],
  };

  return (
    <footer>
      <div className="footer-links">
        <ul>
          {footerLinks.cellBlocks.map((cellBlock, index) =>
            // Check if `cellBlock.link` is defined before accessing it
            cellBlock.link ? (
              <li key={index}>
                <a href={cellBlock.link.href} target="_blank" rel="noreferrer">
                  <i className={cellBlock.link.className}></i>
                </a>
              </li>
            ) : null // If `cellBlock.link` is undefined, do nothing
          )}
        </ul>
      </div>
    </footer>
  );
};
