import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/contact.css";

function Contact() {
  const [contact, setContact] = useState(null);

  const fetchContact = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      setContact(res.data.contact);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

if (!contact) {
  return <h2>No Contact Information Available.</h2>;
}

  return (
    <section className="contact-page">
      <div className="contact-header">
        <p>CONTACT US</p>

        <h1>{contact.heading}</h1>

        <span>{contact.description}</span>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>Company</h3>
            <p>{contact.companyName}</p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>
            <p>{contact.phone}</p>
          </div>

          <div className="info-box">
            <h3>Email</h3>
            <p>{contact.email}</p>
          </div>

          <div className="info-box">
            <h3>Address</h3>
            <p>{contact.address}</p>
          </div>

          <div className="info-box">
            <h3>Working Hours</h3>
            <p>{contact.workingDays}</p>
            <p>{contact.workingHours}</p>
          </div>
        </div>

        {/* Right Side */}

        <form className="contact-form">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
          />

          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows="6"
            placeholder="How can we help you?"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;