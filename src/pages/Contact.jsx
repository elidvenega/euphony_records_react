import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">Euphony</div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- USING CHECKBOX HACK --> */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
        </ul>
      </nav>
      <section id="contact" className="contain">
        <div className="contact-form bg-primary">
          <h1 className="m-heading text-center mt-4">Contact Us</h1>
          <p className="text-center">Please use the form below to contact us</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="name"
                id="name"
                placeholder="Enter Name"
              ></textarea>
            </div>
            <button className="btn-submit">Submit</button>
            {/* <input type="submit" value="Submit" className="btn-submit" /> */}
          </form>
        </div>
      </section>
    </>
  );
};
