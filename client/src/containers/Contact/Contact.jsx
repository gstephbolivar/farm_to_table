import React from "react";
import ContactCard from "../../components/ContactCard/ContactCard"

const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column ">
              <div className="columns is-centered is-multiline">
                <h3 className="title has-text-centered products-headline">
                  Contact us
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
            <ContactCard />
        </div>

      </section>
    </>
  );
};

export default Contact;
