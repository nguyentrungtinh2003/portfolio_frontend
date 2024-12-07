import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      alert("You must accept the terms.");
      return;
    }

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      topic: formData.topic,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Email sending failed:", error);
          alert("Sorry, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out for any inquiries or collaborations.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            name="acceptedTerms"
            id="checkbox"
            required
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            <i className="fas fa-send"></i> Send
          </button>
        </div>
      </form>
    </section>
  );
}
