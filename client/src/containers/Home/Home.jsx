import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered is-multiline">
          <div className="column is-8" id="column">
            <img
              src="https://www.placecage.com/g/500/300"
              className="figure-img img-fluid rounded"
              id="Logo"
              alt=""
            />
            <h1 className="title">Farm to Table</h1>

            <p id="about-me">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              nihil odit quisquam accusantium ipsum qui, fuga incidunt animi
              ipsam molestiae rem, beatae amet! Tempore unde esse magnam nulla
              necessitatibus nemo aspernatur voluptatem ratione ab itaque.
              Doloremque sed veniam illo officia corrupti quam provident sequi
              totam saepe, sit exercitationem pariatur quisquam.
            </p>
            <div className="buttons are-medium is-centered">
              <button className="button" id="" href="" target="_blank">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
