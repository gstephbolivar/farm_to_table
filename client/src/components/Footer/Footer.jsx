import React from "react";
import { render } from "react-dom";
import "./index.css";


const Footer = () => (
    <footer className="footer">
      <p>Some footer nonsense!</p>
    </footer>
  );

  render([<Footer key="2" />], document.getElementById("root"));

  export default Footer;