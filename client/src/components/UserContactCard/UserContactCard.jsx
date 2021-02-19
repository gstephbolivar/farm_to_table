import React from "react";
import ContactForm from "../ContactForm/ContactForm";

const UserContactCard = () => {
  return (
    <>
      <section className="section">
        <div className="columns is-centered is-multiline">
          <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserContactCard;
