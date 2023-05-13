import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./FindUs.css";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="CONTACT" />
      <h1 className="headtext__poiret" style={{ marginBottom: "3rem" }}>
        FIND US
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Perlemoen Restaurant, Old Harbour, 64 Marine Drive, Hermanus 7200,
          South Africa
        </p>
        <p className="p__poiret" style={{ color: "#DCCA87", margin: "2rem 0" }}>
          WINTER OPENING HOURS
        </p>
        <p className="p__opensans" style={{ textTransform: "none" }}>
          Tuesday-Thursday and Sunday: Lunch only
        </p>
        <p className="p__opensans" style={{ textTransform: "none" }}>
          Friday-Saturday: Lunch and dinner
        </p>
        <p className="p__poiret" style={{ color: "#DCCA87", margin: "2rem 0" }}>
          GET IN TOUCH
        </p>
        <p className="p__opensans">+27 314 8658</p>
        <div className="app__findus-link">
          <a
            className="p__opensans"
            href="mailto: bookings@perlemoenrestaurant.com"
            style={{ textTransform: "none" }}
          >
            bookings@perlemoen.com
          </a>
        </div>

        <div
          className="app__footer-links_icons"
          style={{ color: "white", marginTop: "1.5rem" }}
        >
          <a
            href="https://www.facebook.com/oldharbourperlemoen/"
            style={{ fontSize: "40px" }}
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.instagram.com/oldharbourperlemoen/?hl=en"
            style={{ fontSize: "40px", margin: "0 2rem" }}
          >
            <FiInstagram />
          </a>
        </div>
      </div>

      <button className="custom__button" style={{ marginTop: "2rem" }}>
        <a href="#home">BACK TO TOP</a>
      </button>
      <div className="footer__copyright">
        <p
          className="p__opensans"
          style={{ marginTop: "1rem", justifyContent: "center" }}
        >
          © 2023 Perlemoen. All rights reserved
        </p>
        <p
          className="p__opensans"
          style={{ textTransform: "none", marginTop: "1rem" }}
        >
          <div className="app__findus-link">
            Site design by{" "}
            <a href="mailto: dan@web-untangled.com">dan@web-untangled.com</a>
          </div>
        </p>
      </div>
    </div>
    <div className="app__findus_img">
      <img src={images.PerlyRestaurant} alt="findus" />
    </div>
  </div>
);

export default FindUs;
