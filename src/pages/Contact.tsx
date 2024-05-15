import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Contact = () => (
  <>
    <Navbar
      title={"Euphony"}
      home={"Home"}
      about={"About"}
      music={"Music"}
      contact={"Contact"}
      albums={"Albums"}
    />
    <section id="contact" className="contain height-container">
      <div className="contact-form bg-primary">
        <h1 className="m-heading text-center mt-4">Contact Us</h1>
        <p className="text-center">Please use the form below to contact us</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name" />
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
            <textarea name="name" id="name" placeholder="Enter Name"></textarea>
          </div>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
    <Footer />
  </>
);
