import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FooterOverlay } from "../../components";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">GET IN TOUCH</h1>
        <p className="p__opensans">+27 314 8658</p>
        <a
          className="p__opensans"
          href="mailto: bookings@perlemoenrestaurant.com"
          style={{ textTransform: "none" }}
        >
          bookings@perlemoen.com
        </a>
      </div>
      <div className="app__footer-links_brand">
        <h1>PERLEMOEN RESTAURANT</h1>
        <p className="p__openans">"</p>
      </div>
      <div className="app__footer-links_work"></div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Perlemoen. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
