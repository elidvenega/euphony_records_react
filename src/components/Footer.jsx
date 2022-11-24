import React from "react";

export const Footer = () => {
  const twitter = "https://twitter.com";
  const facebook = "https://www.facebook.com/";
  const instagram = "https://www.instagram.com/";
  return (
    <>
      <footer>
        <div className="links">
          <a href={facebook} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href={instagram} target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href={twitter} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
