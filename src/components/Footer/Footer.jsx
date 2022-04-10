import React from "react";
import './style.scss'
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="text-container">
          <text className="text">
            <div className="text-row">
              <span>L</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
              <span>m</span>
              <span>I</span>
              <span>p</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>m</span>
              <span>i</span>
              <span>t</span>
              <span>t</span>
              <span>e</span>
              <span>e</span>
            </div>
            <br/>
            <div className="text-row">
              <span>L</span>
              <span>o</span>
              <span>r</span>
              <span>e</span>
              <span>m</span>
              <span>I</span>
              <span>p</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>m</span>
              <span>i</span>
              <span>t</span>
              <span>t</span>
              <span>e</span>
              <span>e</span>
            </div>
          </text>
        </div>
        <div className="contact-container">
          <div className="contact-row">
            <FiLinkedin className="icons right-padding"/>
            <FiFacebook className="icons right-padding"/>
            <FiInstagram className="icons right-padding"/>
            <text className="email-text right-padding">bobo@gmail.com</text>
          </div>
          <FiTwitter className="icon"/>
        </div>
      </div>
    </>
  );
};

export default Footer;
