import React, { useState } from "react";
import "./contact.css";
import { toast } from "react-toastify";
// Form for the user to contact website
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    try {
      await setStatus("Sending...");
      toast.success(
        "Thank you for reaching out! We will get back to you soon.",
        { hideProgressBar: true, autoClose: 5000 }
      );
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      console.log(details);
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form className="box" onSubmit={handleSubmit}>
        <div className="columns is-centered is-mobile">
          <img
            src="./assets/icons/signUp_2.svg"
            className="figure-img img-fluid rounded"
            id="signUp-icon-2"
            alt="tomato and pear icon"
          />
          <h3 className="title" id="contact-headline">
            Contact Us
          </h3>
          <img
            src="./assets/icons/login_1.svg"
            className="figure-img img-fluid rounded"
            id="login-icon-1"
            alt="apple avocado icon"
          />
        </div>
        <p className="has-text-centered contact-text">
          Thank you for supporting your community and shopping locally! Please
          reach out to use with any questions.
        </p>
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Old Macdougal"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <div className="control">
            <input
              className="input"
              type="email"
              id="email"
              placeholder="oldmacdonald@domain.com"
              required
            />
          </div>
        </div>
        {/* it's a Message*/}

        <div className="field">
          <label className="label" htmlFor="message">
            Message
          </label>
          <div className="control">
            <textarea
              className="textarea"
              id="message"
              placeholder="How can we help?"
            ></textarea>
          </div>
        </div>

        <div className="field has-text-centered">
          <button className="button" id="login-btn" type="submit">
            {status}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
