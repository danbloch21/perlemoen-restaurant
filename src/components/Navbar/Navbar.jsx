import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { data } from "../../constants";
import MenuHeader from "../../components/MenuHeader/MenuHeader";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import { SubHeading, MenuItem } from "../../components";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar" style={{ letterSpacing: "0.4em" }}>
      <h1>
        <a href="#home">PERLEMOEN RESTAURANT</a>
      </h1>
      <div className="app__navbar-logo">
        <img src={images.Shells233pc} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#about">ABOUT</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">MENU</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#awards" className="p__opensans">
          AWARDS & MEDIA
        </a>
        <div />
        <a
          href="mailto: bookings@perlemoenrestaurant.com"
          className="p__opensans"
        >
          BOOK A TABLE
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu ? (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="app__bg app__wrapper section__padding" id="contact">
              <div className="app__wrapper_info">
                <SubHeading title="CONTACT" />
                <h1
                  className="headtext__poiret"
                  style={{ marginBottom: "3rem" }}
                >
                  WHERE TO FIND US
                </h1>
                <div className="app__wrapper-content">
                  <p className="p__opensans">
                    Perlemoen Restaurant, Old Harbour, 64 Marine Drive, Hermanus
                    7200, South Africa
                  </p>
                  <p
                    className="p__poiret"
                    style={{ color: "#DCCA87", margin: "2rem 0" }}
                  >
                    WINTER OPENING HOURS
                  </p>
                  <p className="p__opensans" style={{ textTransform: "none" }}>
                    Tuesday-Thursday and Sunday: Lunch only
                  </p>
                  <p className="p__opensans" style={{ textTransform: "none" }}>
                    Friday-Saturday: Lunch and dinner
                  </p>
                  <p
                    className="p__poiret"
                    style={{ color: "#DCCA87", margin: "2rem 0" }}
                  >
                    BOOK A TABLE
                  </p>
                  <div className="app__findus-whatsapp">
                    <img src={images.WhatsApp} alt="whatsapp" />
                    <p className="p__opensans">+27 79 314 8658</p>
                  </div>
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
                      Site by{" "}
                      <a href="mailto: dan@web-untangled.com">
                        dan@web-untangled.com
                      </a>
                    </div>
                  </p>
                </div>
              </div>
              <div className="app__findus_img">
                <img src={images.PerlyRestaurant} alt="findus" />
              </div>
            </div>
            {/* <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <div
                  onClick={(event) => [
                    setToggleMenu(false),
                    window.location.replace("/#home"),
                  ]}
                >
                  <span>HOME</span>
                </div>
              </li>
              <li className="p__opensans">
                <div
                  onClick={(event) => [
                    setToggleMenu(false),
                    window.location.replace("/#about"),
                  ]}
                >
                  <span>ABOUT</span>
                </div>
              </li>
              <li className="p__opensans">
                <div
                  onClick={(event) => [
                    setToggleMenu(false),
                    window.location.replace("/#menu"),
                  ]}
                >
                  <span>MENU</span>
                </div>
              </li>
              <li className="p__opensans">
                <div
                  onClick={(event) => [
                    setToggleMenu(false),
                    window.location.replace("/#awards"),
                  ]}
                >
                  <span>AWARDS</span>
                </div>
              </li>
              <li className="p__opensans">
                <div
                  onClick={(event) => [
                    setToggleMenu(false),
                    window.location.replace("/#contact"),
                  ]}
                >
                  <span>CONTACT</span>
                </div>
              </li>
              <li className="p__opensans">
                <a href="mailto: bookings@perlemoenrestaurant.com">
                  BOOK A TABLE
                </a>
              </li>
            </ul> **/}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
