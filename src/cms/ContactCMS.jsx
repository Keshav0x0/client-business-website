import { useEffect, useState } from "react";
import axios from "axios";

function ContactCMS() {
  const emptyContact = {
    companyName: "",
    heading: "",
    description: "",
    phone: "",
    email: "",
    address: "",
    workingDays: "",
    workingHours: "",
  };

  const [contact, setContact] = useState(emptyContact);
  const [loading, setLoading] = useState(false);

  // Fetch Contact Data

  const fetchContact = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/contact"
      );

      if (res.data.contact) {
        setContact(res.data.contact);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  // Handle Input Change

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // Save Contact Data

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.put(
        "http://localhost:5000/api/contact",
        contact
      );

      alert("Contact Updated Successfully");

      fetchContact();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="products-container">
      <div className="product-form">
        <h2>Contact CMS</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={contact.companyName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="heading"
            placeholder="Page Heading"
            value={contact.heading}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={contact.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={contact.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={contact.email}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address"
            value={contact.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="workingDays"
            placeholder="Working Days"
            value={contact.workingDays}
            onChange={handleChange}
          />

          <input
            type="text"
            name="workingHours"
            placeholder="Working Hours"
            value={contact.workingHours}
            onChange={handleChange}
          />

          <button className="primary-btn">
            {loading ? "Saving..." : "Save Contact"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactCMS;