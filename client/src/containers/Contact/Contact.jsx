import React from "react";
import AdminContactCard from "../../components/AdminContactCard/AdminContactCard";
import UserContactCard from "../../components/UserContactCard/UserContactCard";

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
          {/* {window.location.pathname === "/admin/contact" && <AdminContactCard />} */}
          {/* {window.location.pathname === "/user/contact" && <UserContactCard />} */}
          {/* <AdminContactCard /> */}
          <UserContactCard />
        </div>
      </section>
    </>
  );
};

export default Contact;
