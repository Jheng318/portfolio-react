import React, { useState } from "react";
function Contact() {
  const WEB3FORMS_ACCESS_KEY = "51eb1f7c-7973-4bf4-8197-7cd31f08f831";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset form after submission (optional)
    setFormData({ name: "", email: "", message: "" });
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
      }),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <section id="contact" className="limit">
      <h2>Contact Me</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. example@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
