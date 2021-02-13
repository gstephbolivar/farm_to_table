import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <div className="columns is-centered is-multiline">
          <div className="column is-8" id="column">
            <img
              src="./assets/icons/logo.svg"
              className="figure-img img-fluid rounded"
              id="Logo"
              alt="farm to table logo"
            />
            <p id="home-text">
              We work with small family organic farms. Our local farmers crop
              plan from year to year with our customers in mind. They grow
              highly diverse crops for the healthiest ecosystem, while also
              cover cropping and resting their land.
            </p>
            <br />
            <p id="home-text">
              We are an online farmers market allowing customizable orders to
              either be picked up or delivered to your doorstep. We offer
              produce, meat, and dairy products. Together, we're creating a
              local food system that supports organic farms and reduces food and
              packaging waste.
            </p>
            <br />
            <div className="buttons are-medium is-centered">
              <button className="button" type="button" id="shopNow">
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
