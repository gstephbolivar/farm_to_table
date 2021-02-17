import React, { useState } from "react";

const UserContactCard = () => {
    const [contactForm, setContactForm] = useState({});
  return (
    <>
      <div className="container has-text-centered">
        <div className="columns is-centered is-multiline">
          <h1>
            {" "}
            Thank you for supporting your community and shopping locally!
            <br />
            <br />
            If you have any questions about your order please reach out to the
            farm you placed your order from.
            <br />
            <br />
            If you have any questions not related to your order please fill out
            the contact form below and we'll respond as quickly as possible.
          </h1>
        </div>
        <div>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Jane Doe" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                // value="hello@"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserContactCard;
