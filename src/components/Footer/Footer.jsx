import React from "react";
import { LinkedIn } from "react-feather";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Twitter } from "react-feather";

const Footer = () => {
  return (
    <Footer>
      <div className="footer-container"></div>
      <h2>Lorem Ipsum Committee</h2>
      <h2>Lorem Ipsum Committee</h2>
      <div className="contact-container">
        <div className="contact-row">/
          <LinkedIn />
          <Facebook />
          <Instagram />
          <text className="email-text">bobo@gmail.com</text>
        </div>
        <Twitter />
      </div>
    </Footer>
  );
};

export default Footer;
