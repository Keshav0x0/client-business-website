import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <p>CONTACT US</p>

        <h1>Let's Talk About Your Requirements</h1>

        <span>
          Have questions or need a custom tarpaulin solution? Reach out to
          KV Enterprises and our team will assist you.
        </span>
      </div>

      <div className="contact-container">
        {/* Left Side */}

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-box">
            <h3>Email</h3>
            <p>info@kventerprises.com</p>
          </div>

          <div className="info-box">
            <h3>Address</h3>
            <p>
              KV Enterprises,
              <br />
              Rohtak, Haryana, India
            </p>
          </div>

          <div className="info-box">
            <h3>Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 7:00 PM</p>
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

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;