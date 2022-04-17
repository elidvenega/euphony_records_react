import React from "react";

export const ContactForm = () => {
  return (
    <React.Fragment>
      <section id="contact" className="contain">
        <div className="contact-form bg-primary">
          <h2 className="m-heading text-center">Contact Us</h2>
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
            <input type="submit" value="Submit" className="btn-submit" />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};
