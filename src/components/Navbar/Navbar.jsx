import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../constants/images";
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
            <ul className="app__navbar-smallscreen_links">
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
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
